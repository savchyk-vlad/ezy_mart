import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';
import { drawerNavigatorOptions } from './navigationOptions';
import { AppScreens } from '../AppScreens';
import { SCREENS } from '~constants';

const DrawerScreen = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerScreen.Navigator
      drawerContent={DrawerContent}
      screenOptions={drawerNavigatorOptions}>
      <DrawerScreen.Screen
        name={SCREENS.HOME_STACK}
        component={AppScreens}
        options={{ swipeEnabled: false }}
      />
    </DrawerScreen.Navigator>
  );
};

export default DrawerNavigator;
