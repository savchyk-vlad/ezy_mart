import React, { useEffect, useState } from 'react';

import { SCREENS, STORAGE_KEYS } from '~constants';
import { IAuthContext, IState } from './types';
import AsyncStorageService from '~services/AsyncStorageService';

const initialState: IState = {
  isAuthenticated: false,
  initialRouteName: SCREENS.ONBOARDING,
  isOnboardingCompleted: false,
  isLoading: true,
};

const AuthenticationContext = React.createContext<IAuthContext>({
  state: initialState,
  logout: () => null,
  markOnboardingCompleted: () => null,
});

const AuthenticationProvider = ({ ...props }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const getAuthState = async () => {
      let onboardingStatus = '';

      try {
        onboardingStatus =
          (await AsyncStorageService.getItem(
            STORAGE_KEYS.IS_ONBOARDING_COMPLETED,
          )) || false;
      } catch (error) {
        console.log(
          'Error retrieving onboarding status from local storage: ',
          error,
        );
      }

      setState({
        ...state,
        isLoading: false,
        isAuthenticated: state.isAuthenticated,
        isOnboardingCompleted: onboardingStatus ? true : false,
      });
    };

    getAuthState().catch(console.error);
  }, []);

  const logout = async () => {
    // if (!state.isAuthenticated) {
    //   return;
    // }

    AsyncStorageService.clearStorage([STORAGE_KEYS.IS_ONBOARDING_COMPLETED]);

    setState({
      ...state,
      isAuthenticated: false,
      initialRouteName: SCREENS.ONBOARDING,
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

  return (
    <AuthenticationContext.Provider
      value={{
        state,
        logout,
        markOnboardingCompleted,
      }}
      {...props}
    />
  );
};

export default AuthenticationProvider;
export const useAuthentication = (): IAuthContext =>
  React.useContext(AuthenticationContext);
