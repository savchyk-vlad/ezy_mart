import { createStyleSheet } from 'react-native-unistyles';

import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets';
import { ITheme } from '~types';

export const stylesheet = createStyleSheet((theme: ITheme) => ({
  drawer_header_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    justifyContent: ThemeLayouts.justifyContent.spaceBetween,
    alignItems: ThemeLayouts.alignItems.center,
    height: 80,
    padding: 20,
  },
  drawer_header_logo: {
    fontFamily: ThemeFonts.fontFamily.Roboto.Bold,
    fontSize: 30,
  },
  drawer_header_underline: {
    height: 1,
    width: '100%',
    backgroundColor: ThemeColors.botticelli,
  },
  drawer_item_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    alignItems: ThemeLayouts.alignItems.center,
    paddingVertical: 10,
  },
  drawer_active_marker: {
    width: 4,
    height: '100%',
    backgroundColor: ThemeColors.purple,
  },
  drawer_in_active_marker: {
    backgroundColor: 'none',
  },
  drawer_item_icon: {
    width: 40,
    marginLeft: 40,
    paddingVertical: 16,
  },
  drawer_item_label: {
    fontFamily: ThemeFonts.fontFamily.Poppins.Medium,
    color: ThemeColors.purple,
    fontSize: 20,
  },
  drawer_in_active_item_label: {
    fontFamily: ThemeFonts.fontFamily.Poppins.Medium,
    color: ThemeColors.drawer_in_active,
    fontSize: 20,
  },
  drawer_switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginLeft: 80,
    marginBottom: 6,
  },
  drawer_log_out_item_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    alignItems: ThemeLayouts.alignItems.center,
    justifyContent: ThemeLayouts.justifyContent.center,
    marginTop: 60,
    width: '86%',
  },
  drawer_log_out_item_label: {
    fontFamily: ThemeFonts.fontFamily.Poppins.Medium,
    color: ThemeColors.orange,
    fontSize: 20,
    textTransform: 'uppercase',
  },
}));
