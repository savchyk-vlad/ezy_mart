import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthScreens } from './AuthScreens';
import { AppScreens } from './AppScreens';
import { useAuthentication } from '~providers/auth/AuthenticationProvider';
import { PLATFORM } from '~constants';
import { SplashScreen } from '../SplashScreen';

const Navigation = () => {
  const { state: authState } = useAuthentication();
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  const AuthStackApp = () => <AuthScreens />;

  const RootStackApp = () => {
    return <AppScreens />;
  };



  const ApplicationScreens = useMemo(() => {
    if (authState.isAuthenticated) {
      return RootStackApp();
    } else {
      return AuthStackApp();
    }
  }, [authState.isAuthenticated]);

  useEffect(() => {
    if (!authState.isLoading) {
      if (PLATFORM.isIos) {
        setTimeout(() => {
          setSplashScreenVisible(false);
        }, 1000);
        return;
      }
    }
  }, [authState.isLoading]);

  return (
    <>
      {splashScreenVisible ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>{ApplicationScreens}</NavigationContainer>
      )}
    </>
  );
};

export default Navigation;
