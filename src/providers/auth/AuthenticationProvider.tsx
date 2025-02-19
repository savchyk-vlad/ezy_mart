import React, { useEffect, useState } from 'react';

import { SCREENS, STORAGE_KEYS } from '~constants';
import { IAuthContext, IState } from './types';
import AsyncStorageService from '~services/AsyncStorageService';
import { useFacebookAuth, useGoogleAuth } from '~hooks';
import { getItemFromAsyncStorage } from '~utils';

const userInitialState = {
  birthdate: '',
  email: '',
  firstName: '',
  gender: '',
  lastName: '',
  phoneNumber: '',
  nickname: '',
  image: '',
};

const initialState: IState = {
  isAuthenticated: false,
  initialRouteName: SCREENS.ONBOARDING,
  isOnboardingCompleted: false,
  isLoading: true,
  accessToken: '',
  userData: userInitialState,
};

const AuthenticationContext = React.createContext<IAuthContext>({
  state: initialState,
  user: userInitialState,
  splashScreenVisible: true,
  logout: () => null,
  markOnboardingCompleted: () => null,
  loginFromGoogle: () => null,
  loginFromFacebook: () => null,
  setSplashScreenVisible: () => null,
});

const AuthenticationProvider = ({ ...props }) => {
  const [state, setState] = useState(initialState);
  const { signInWithGoogle } = useGoogleAuth();
  const { signInWithFacebook } = useFacebookAuth();
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  useEffect(() => {
    const getAuthState = async () => {
      const accessToken = await getItemFromAsyncStorage(
        STORAGE_KEYS.ACCESS_TOKEN,
        'Error retrieving accessToken from local storage: ',
      );

      const onboardingStatus = await getItemFromAsyncStorage(
        STORAGE_KEYS.IS_ONBOARDING_COMPLETED,
        'Error retrieving onboarding status from local storage: ',
      );

      const userInfo = await getItemFromAsyncStorage(
        STORAGE_KEYS.USER_INFORMATION,
        'Error retrieving user information from local storage: ',
      );

      const parseUserInfo = JSON.parse(userInfo);

      setState({
        ...state,
        userData: parseUserInfo
          ? { ...parseUserInfo }
          : { ...userInitialState },
        isLoading: false,
        isAuthenticated: !!accessToken,
        isOnboardingCompleted: !!onboardingStatus,
      });
    };

    getAuthState().catch(console.error);
  }, []);

  const logout = async () => {
    if (!state.isAuthenticated) {
      return;
    }

    setSplashScreenVisible(true);
    await AsyncStorageService.clearStorage([
      STORAGE_KEYS.ACCESS_TOKEN,
      STORAGE_KEYS.USER_INFORMATION,
    ]);

    setState({
      ...state,
      initialRouteName: SCREENS.SIGN_IN,
      isAuthenticated: false,
    });

    setSplashScreenVisible(false);
  };

  const markOnboardingCompleted = async () => {
    try {
      await AsyncStorageService.setItem(
        STORAGE_KEYS.IS_ONBOARDING_COMPLETED,
        true,
      );
    } catch (error) {
      console.log(
        'Error setting onboarding status from local storage: ',
        error,
      );
    }

    setState({
      ...state,
      isOnboardingCompleted: true,
    });
  };

  const loginFromGoogle = async () => {
    setSplashScreenVisible(true);
    const googleResponse = await signInWithGoogle();

    if (googleResponse?.idToken) {
      AsyncStorageService.setItem(
        STORAGE_KEYS.ACCESS_TOKEN,
        googleResponse.idToken,
      );

      const user = {
        birthdate: state.userData.birthdate || '',
        email: googleResponse.user.email,
        firstName: googleResponse.user.givenName,
        gender: state.userData.gender || '',
        lastName: googleResponse.user.familyName,
        phoneNumber: state.userData.phoneNumber || '',
        nickname: state.userData.nickname || '',
        image: googleResponse.user.photo,
      };

      await AsyncStorageService.setItem(
        STORAGE_KEYS.USER_INFORMATION,
        JSON.stringify(user),
      );

      setState({
        ...state,
        userData: { ...user },
        isAuthenticated: true,
      });
    }
    setSplashScreenVisible(false);
  };

  const loginFromFacebook = async () => {
    setSplashScreenVisible(true);

    const facebookResponse = await signInWithFacebook();

    if (facebookResponse?.accessToken) {
      AsyncStorageService.setItem(
        STORAGE_KEYS.ACCESS_TOKEN,
        facebookResponse.accessToken,
      );

      const user = {
        birthdate: state.userData.birthdate || '',
        email: state.userData.email || '',
        firstName: facebookResponse.userData.name.split(' ')[0],
        gender: state.userData.gender || '',
        lastName: facebookResponse.userData.name.split(' ')[1],
        phoneNumber: state.userData.phoneNumber || '',
        nickname: state.userData.nickname || '',
        image: facebookResponse.userData.picture.data.url,
      };

      await AsyncStorageService.setItem(
        STORAGE_KEYS.USER_INFORMATION,
        JSON.stringify(user),
      );

      setState({
        ...state,
        userData: { ...user },
        isAuthenticated: true,
      });
    }
    setSplashScreenVisible(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        state,
        user: state.userData,
        logout,
        markOnboardingCompleted,
        loginFromGoogle,
        loginFromFacebook,
        splashScreenVisible,
        setSplashScreenVisible,
      }}
      {...props}
    />
  );
};

export default AuthenticationProvider;
export const useAuthentication = (): IAuthContext =>
  React.useContext(AuthenticationContext);
