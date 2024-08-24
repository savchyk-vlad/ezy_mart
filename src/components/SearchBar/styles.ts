import { StyleSheet } from 'react-native';

import { ThemeLayouts } from '~assets';

export const styles = StyleSheet.create({
  search_bar_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    justifyContent: ThemeLayouts.justifyContent.spaceBetween,
    alignItems: ThemeLayouts.alignItems.center,
    paddingVertical: 20,
  },
  input_container_style: {
    width: '82%',
    borderRadius: 6,
  },
  input_style: {
    fontSize: 14,
    color: '#868696',
    fontFamily: 'BeVietnamPro_400Regular',
  },
});

export default styles;
