import { StyleSheet } from 'react-native';

import { ThemeColors } from '~assets';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 170,
  },
  header_container: {
    paddingVertical: 12,
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
  flatList_container: {
    gap: 16,
    paddingLeft: 20,
  },
});

export default styles;
