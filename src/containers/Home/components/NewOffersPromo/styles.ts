import { StyleSheet } from 'react-native';

import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets';

export const styles = StyleSheet.create({
  header_container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: ThemeLayouts.justifyContent.spaceBetween,
    alignItems: ThemeLayouts.alignItems.center,
    flexDirection: ThemeLayouts.flexDirection.row,
  },
  header_label: {
    fontSize: 26,
    fontFamily: ThemeFonts.fontFamily.Poppins.SemiBold,
    color: ThemeColors.black,
  },
  see_all_touchable_opacity_text: {
    color: '#F76834',
    fontFamily: ThemeFonts.fontFamily.Poppins.Regular,
    fontSize: 16,
  },
});

export default styles;
