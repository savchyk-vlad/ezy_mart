import { createStyleSheet } from 'react-native-unistyles';

import { ThemeColors, ThemeFonts } from '~assets';
import { ITheme } from '~types';

//@ts-ignore
export const navigationOptions = createStyleSheet((theme: ITheme) => ({
  tabBarActiveTintColor: theme.colors.tabBarActiveTintColor,
  tabBarInactiveTintColor: theme.colors.tabBarInActiveTintColor,
  tabBarStyle: {
    backgroundColor: theme.colors.header_background,
    height: 95,
    borderTopWidth: 0,
    shadowColor: ThemeColors.gray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: ThemeFonts.fontFamily.Poppins.Regular,
  },
}));

