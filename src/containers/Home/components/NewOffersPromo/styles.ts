import { StyleSheet } from 'react-native';

import { ThemeColors } from '~assets';

export const styles = StyleSheet.create({
  header_container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header_label: {
    fontSize: 26,
    fontFamily: 'Poppins_600SemiBold',
    color: ThemeColors.black,
  },
  see_all_touchable_opacity_text: {
    color: '#F76834',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
});

export default styles;
