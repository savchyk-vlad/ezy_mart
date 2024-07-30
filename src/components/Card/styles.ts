import { StyleSheet } from 'react-native';

import { ThemeColors } from '~assets';

export const styles = StyleSheet.create({
  card_container: {
    width: 180,
  },
  discount_badge_container: {
    width: 44,
    height: 24,
    backgroundColor: '#F76834',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 29,
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 100,
  },
  discount_text: {
    color: ThemeColors.white,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 10,
  },
  image: {
    borderRadius: 10,
    width: '100%',
  },
  favorite_button_container: {
    position: 'absolute',
    right: 2,
    bottom: 58,
    zIndex: 200,
    backgroundColor: 'transparent',
  },
  card_info_container: {
    flexDirection: 'row',
    gap: 14,
    paddingVertical: 6,
  },
  merchant_name: {
    color: '#616161',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  merchant_rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  product_name: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  product_price_container: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  product_current_price: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#4C46B8',
  },
  product_old_price: {
    fontSize: 10,
    fontFamily: 'Poppins_400Regular',
    color: '#F76834',
  },
  product_old_price_linestroke: {
    position: 'absolute',
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
