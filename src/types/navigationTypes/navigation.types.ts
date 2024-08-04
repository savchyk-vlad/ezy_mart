import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SCREENS } from '~constants';

export type RootStackParamsList = {
  [SCREENS.SIGN_IN]: { hideBackButton?: boolean };
  [SCREENS.SIGN_UP]: undefined;
  [SCREENS.HOME]: undefined;
  [SCREENS.PROFILE]: undefined;
  [SCREENS.CART]: undefined;
  [SCREENS.FAVORITES]: undefined;
  [SCREENS.MERCHANT]: undefined;
  [SCREENS.SETTINGS]: undefined;
  [SCREENS.SUPPORT]: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamsList>;
