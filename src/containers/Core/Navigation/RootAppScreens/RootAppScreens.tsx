import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppScreens } from "../screens";
import { styleOptions } from "./styles";
import { useAsyncStorageContext } from "~providers/AsyncStorageContext";
import { SCREENS } from "~constants";
import { ActivityIndicator, SafeAreaView } from "react-native";

const Stack = createStackNavigator();

const RootAppScreens = () => {
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
      {AppScreens.map((screen) => (
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

export default RootAppScreens;
