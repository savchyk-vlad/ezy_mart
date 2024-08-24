import { ThemeColors } from './colors';

export const lightTheme = {
  colors: {
    background: ThemeColors.white,
    header_background: ThemeColors.white,
    tab_bar_background: ThemeColors.white,
    header_shadow: ThemeColors.gray,
    header_text: ThemeColors.header_text_color,
    text: ThemeColors.black,
    tabBarActiveTintColor: ThemeColors.tabBarActiveTintColor,
    tabBarInActiveTintColor: ThemeColors.tabBarInactiveTintColor,
  },
} as const;

export const darkTheme = {
  colors: {
    background: ThemeColors.dark_background,
    header_background: ThemeColors.dark_header_and_tabs,
    tab_bar_background: ThemeColors.dark_header_and_tabs,
    header_shadow: ThemeColors.white,
    header_text: ThemeColors.purple,
    text: ThemeColors.white,
    tabBarActiveTintColor: ThemeColors.purple,
    tabBarInActiveTintColor: ThemeColors.white,
  },
} as const;
