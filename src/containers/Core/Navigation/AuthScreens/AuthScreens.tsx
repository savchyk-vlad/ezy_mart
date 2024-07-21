import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, SafeAreaView } from 'react-native';

import { AppScreens } from '../screens';
import { styleOptions } from './styles';
import { SCREENS } from '~constants';
import { useAsyncStorageContext } from '~providers/asyncStorage/AsyncStorageProvider';

const Stack = createStackNavigator();

const AuthScreens = () => {
  const { userData, isAsyncStorageLoading } = useAsyncStorageContext();

  const onboardingPassStatus = userData.onboardingPassStatus;

  if (isAsyncStorageLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <Stack.Navigator initialRouteName={onboardingPassStatus && SCREENS.SIGN_IN}>
      {AppScreens.map(screen => (
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
