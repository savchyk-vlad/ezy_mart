import React from "react";
import { RootAppScreens } from "./RootAppScreens";
import { NavigationContainer } from "@react-navigation/native";

import { useCustomFonts } from "~hooks";
import { ActivityIndicator } from "react-native";

const Navigation = () => {
  const { fontsLoaded } = useCustomFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else
    return (
      <NavigationContainer>
        <RootAppScreens />
      </NavigationContainer>
    );
};

export default Navigation;
