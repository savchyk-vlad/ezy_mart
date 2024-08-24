import { StyleSheet } from 'react-native';

import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets';

export const styles = StyleSheet.create({
  card_container: {
    width: 180,
  },
  discount_badge_container: {
    width: 44,
    height: 24,
    backgroundColor: '#F76834',
    justifyContent: ThemeLayouts.justifyContent.center,
    alignItems: ThemeLayouts.alignItems.center,
    borderRadius: 29,
    position: ThemeLayouts.position.absolute,
    top: 12,
    left: 12,
    zIndex: 100,
  },
  discount_text: {
    color: ThemeColors.white,
    fontFamily: ThemeFonts.fontFamily.Poppins.SemiBold,
    fontSize: 10,
  },
  image: {
    borderRadius: 10,
    width: '100%',
  },
  favorite_button_container: {
    position: ThemeLayouts.position.absolute,
    right: 2,
    bottom: 58,
    zIndex: 200,
    backgroundColor: 'transparent',
  },
  card_info_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    gap: 14,
    paddingVertical: 6,
  },
  merchant_name: {
    color: '#616161',
    fontFamily: ThemeFonts.fontFamily.Poppins.Regular,
    fontSize: 12,
  },
  merchant_rating: {
    flexDirection: ThemeLayouts.flexDirection.row,
    alignItems: ThemeLayouts.alignItems.center,
    gap: 2,
  },
  product_name: {
    fontSize: 16,
    fontFamily: ThemeFonts.fontFamily.Poppins.SemiBold,
  },
  product_price_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    gap: 20,
    alignItems: ThemeLayouts.alignItems.center,
  },
  product_current_price: {
    fontSize: 16,
    fontFamily: ThemeFonts.fontFamily.Poppins.SemiBold,
    color: '#4C46B8',
  },
  product_old_price: {
    fontSize: 10,
    fontFamily: ThemeFonts.fontFamily.Poppins.Regular,
    color: '#F76834',
  },
  product_old_price_linestroke: {
    position: ThemeLayouts.position.absolute,
    transform: [{ rotate: '-12deg' }],
    top: 7,
    width: 40,
    height: 1,
    borderBottomColor: '#F76834',
    borderBottomWidth: 1,
  },
  last_card: {
    paddingRight: 20,
  },
});

export default styles;
