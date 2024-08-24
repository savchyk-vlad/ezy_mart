import { StyleSheet } from 'react-native';

import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 170,
  },
  header_container: {
    paddingVertical: 12,
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
  flatList_container: {
    gap: 16,
    paddingLeft: 20,
  },
});

export default styles;
