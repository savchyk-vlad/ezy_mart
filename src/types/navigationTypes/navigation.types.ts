import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SCREENS } from "~constants";

export type RootStackParamsList = {
  [SCREENS.SIGN_IN]: { hideBackButton?: boolean };
  [SCREENS.SIGN_UP]: {};
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamsList>;
