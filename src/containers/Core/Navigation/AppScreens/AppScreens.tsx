import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useStyles } from 'react-native-unistyles';

import { APP_ROOT_SCREENS } from '../screens';
import { TabNavigatorHeader } from '~components';
import { navigationOptions } from './navigationOptions';

const BottomNavigatorStack = createBottomTabNavigator();

const AppScreens = () => {
  // const { styles } = useStyles(navigationOptions);

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
            // ...styles,
          }}
        />
      ))}
    </BottomNavigatorStack.Navigator>
  );
};
export default AppScreens;
