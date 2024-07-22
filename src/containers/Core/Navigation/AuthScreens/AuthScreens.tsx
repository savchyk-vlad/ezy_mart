import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuthentication } from '~providers/auth/AuthenticationProvider';
import { AUTH_SCREENS } from '../screens';
import { styleOptions } from './styles';
import { SCREENS } from '~constants';

const Stack = createStackNavigator();

const AuthScreens = () => {
  const { state: authState } = useAuthentication();

  return (
    <Stack.Navigator
      initialRouteName={
        authState.isOnboardingCompleted ? SCREENS.SIGN_IN : SCREENS.ONBOARDING
      }>
      {AUTH_SCREENS.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={styleOptions(screen)}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthScreens;
