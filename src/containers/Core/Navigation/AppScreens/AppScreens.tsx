import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { APP_ROOT_SCREENS } from '../screens';
import { TabNavigatorHeader } from '~components';
import { bottomNavigatorOptions } from './navigationOptions';

const BottomNavigatorStack = createBottomTabNavigator();

const AppScreens = () => {
  return (
    <BottomNavigatorStack.Navigator backBehavior="history">
      {APP_ROOT_SCREENS.map(screen => (
        <BottomNavigatorStack.Screen
          key={screen.screenRouteName}
          name={screen.screenRouteName}
          component={screen.component}
          options={{
            tabBarIcon: ({ focused }) => screen.icon({ focused }),
            title: screen.label,
            header: () => (
              <TabNavigatorHeader
                title={screen.label}
                screenRouteName={screen.screenRouteName}
              />
            ),
            ...bottomNavigatorOptions,
          }}
        />
      ))}
    </BottomNavigatorStack.Navigator>
  );
};
export default AppScreens;
