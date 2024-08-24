import { createStyleSheet } from 'react-native-unistyles';

import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets';
import { WIDTH } from '~constants';
import { ITheme } from '~types';

export const stylesheet = createStyleSheet((theme: ITheme) => ({
  container: {
    backgroundColor: theme.colors.header_background,
    width: WIDTH,
    shadowColor: theme.colors.header_shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
  },
  right_icons_container: {
    display: 'flex',
    alignItems: ThemeLayouts.alignItems.center,
    flexDirection: ThemeLayouts.flexDirection.row,
    gap: 10,
  },
  home_header_container: {
    paddingHorizontal: 20,
    alignItems: ThemeLayouts.alignItems.center,
    justifyContent: ThemeLayouts.justifyContent.spaceBetween,
    flexDirection: ThemeLayouts.flexDirection.row,
    paddingVertical: 10,
  },
  home_header_burger_container: {
    alignItems: ThemeLayouts.alignItems.center,
    flexDirection: ThemeLayouts.flexDirection.row,
  },
  home_header_title: {
    color: theme.colors.header_text,
    fontFamily: ThemeFonts.fontFamily.PlusJakartaSans.SemiBold,
    fontSize: 24,
    paddingLeft: 20,
  },
  tab_header_icons_container: {
    paddingHorizontal: 20,
    alignItems: ThemeLayouts.alignItems.center,
    justifyContent: ThemeLayouts.justifyContent.spaceBetween,
    flexDirection: ThemeLayouts.flexDirection.row,
    paddingVertical: 10,
  },
  header_title_container: {
    position: ThemeLayouts.position.absolute,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: ThemeLayouts.justifyContent.center,
    alignItems: ThemeLayouts.alignItems.center,
  },
  header_title: {
    paddingLeft: 0,
    color: theme.colors.text,
  },
  profile_header_container: {
    backgroundColor: ThemeColors.purple,
    shadowOpacity: 0,
  },
  back_arrow: {
    zIndex: 220,
  },
}));
