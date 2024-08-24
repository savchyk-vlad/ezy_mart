import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';
import { navigationOptions } from './navigationOptions';
import { AppScreens } from '../AppScreens';
import { SCREENS } from '~constants';
import { useStyles } from 'react-native-unistyles';

const DrawerScreen = createDrawerNavigator();

const DrawerNavigator = () => {
  const { styles } = useStyles(navigationOptions);

  return (
    <DrawerScreen.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerType: 'front',
        ...styles,
      }}>
      <DrawerScreen.Screen
        name={SCREENS.HOME_STACK}
        component={AppScreens}
        options={{ swipeEnabled: false }}
      />
    </DrawerScreen.Navigator>
  );
};

export default DrawerNavigator;
