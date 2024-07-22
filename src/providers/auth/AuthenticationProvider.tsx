import React, { useEffect, useState } from 'react';

import { SCREENS, STORAGE_KEYS } from '~constants';
import { IAuthContext, IState } from './types';
import AsyncStorageService from '~services/AsyncStorageService';
import { useGoogleAuth } from '~hooks';
import { getItemFromAsyncStorage } from '~utils';

const initialState: IState = {
  isAuthenticated: false,
  initialRouteName: SCREENS.ONBOARDING,
  isOnboardingCompleted: false,
  isLoading: true,
  accessToken: '',
};

const AuthenticationContext = React.createContext<IAuthContext>({
  state: initialState,
  logout: () => null,
  markOnboardingCompleted: () => null,
  loginFromGoogle: () => null,
});

const AuthenticationProvider = ({ ...props }) => {
  const [state, setState] = useState(initialState);
  const { signInWithGoogle } = useGoogleAuth();

  useEffect(() => {
    const getAuthState = async () => {
      const accessToken = await getItemFromAsyncStorage(
        STORAGE_KEYS.ACCESS_TOKEN,
        'Error retrieving accessToken from local storage: ',
      );

      const onboardingStatus = await getItemFromAsyncStorage(
        STORAGE_KEYS.IS_ONBOARDING_COMPLETED,
        'Error retrieving accessToken from local storage: ',
      );

      setState({
        ...state,
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

    AsyncStorageService.clearStorage([STORAGE_KEYS.IS_ONBOARDING_COMPLETED]);

    setState({
      ...state,
      isAuthenticated: false,
    });
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
    const userData = await signInWithGoogle();

    if (userData) {
      AsyncStorageService.setItem(STORAGE_KEYS.ACCESS_TOKEN, userData.idToken);

      setState({
        ...state,
        isAuthenticated: !!userData.idToken,
      });
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        state,
        logout,
        markOnboardingCompleted,
        loginFromGoogle,
      }}
      {...props}
    />
  );
};

export default AuthenticationProvider;
export const useAuthentication = (): IAuthContext =>
  React.useContext(AuthenticationContext);
