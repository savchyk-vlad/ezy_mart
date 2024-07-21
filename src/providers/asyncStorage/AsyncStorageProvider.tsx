import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  PropsWithChildren,
  ProviderProps,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert } from 'react-native';

export interface IUserData {
  onboardingPassStatus: boolean;
}
export type UserDataContextType = {
  userData: IUserData;
};

const AsyncStorageContext = createContext<UserDataContextType | any>(null);

const AsyncStorageProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserDataContextType | {}>({});
  const [isAsyncStorageLoading, setIsAsyncStorageLoading] = useState(true);

  const getAsyncStorage = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);

      return value;
    } catch (e) {
      Alert.alert(e as string);
    }
  };

  const setAsyncStorage = async (key: string, data: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      Alert.alert(e as string);
    }
  };

  useEffect(() => {
    const func = async () => {
      const jsonRes = await getAsyncStorage('userData');

      if (jsonRes) {
        const storageData = JSON.parse(jsonRes);

        const newUserData = {
          ...userData,
          onboardingPassStatus: storageData.onboardingPassStatus,
        };

        setUserData(newUserData);
      }

      setIsAsyncStorageLoading(!isAsyncStorageLoading);
    };

    func();
  }, []);

  return (
    <AsyncStorageContext.Provider
      value={{
        userData,
        isAsyncStorageLoading,
        getAsyncStorage,
        setAsyncStorage,
      }}>
      {children}
    </AsyncStorageContext.Provider>
  );
};

export default AsyncStorageProvider;
export const useAsyncStorageContext = () => useContext(AsyncStorageContext);
