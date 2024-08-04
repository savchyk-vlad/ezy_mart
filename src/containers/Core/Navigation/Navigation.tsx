import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useCustomFonts } from '~hooks';
import { useAuthentication } from '~providers/auth/AuthenticationProvider';

import { AuthScreens } from './AuthScreens';
import { AppScreens } from './AppScreens';
import { SplashScreen } from '../SplashScreen';
import { PLATFORM } from '~constants';
import DrawerNavigator from './DrawerNavigator/DrawerNavigator';

const Navigation = () => {
  const { state: authState } = useAuthentication();
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const { fontsLoaded } = useCustomFonts();

  const AuthStackApp = () => <AuthScreens />;

  const RootStackApp = () => {
    return <DrawerNavigator />;
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
      {!fontsLoaded || splashScreenVisible ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>{ApplicationScreens}</NavigationContainer>
      )}
    </>
  );
};

export default Navigation;
