import { StyleSheet } from 'react-native';

import { ThemeColors, ThemeLayouts } from '~assets';
import { HEIGHT } from '~constants';

export const styles = StyleSheet.create({
  profile_container: {
    flex: 1,
  },
  profile_header: {
    backgroundColor: ThemeColors.purple,
    padding: 34,
  },
  profile_buttons_container: {
    flex: HEIGHT,
    backgroundColor: ThemeColors.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profile_header_info_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    alignItems: ThemeLayouts.alignItems.center,
  },
  profile_image: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: ThemeColors.white,
    borderRadius: 100,
    marginRight: 20,
  },
  profile_name: {
    fontFamily: 'OpenSans_500Medium',
    color: ThemeColors.white,
    fontSize: 24,
  },
  profile_email: {
    fontFamily: 'OpenSans_400Regular',
    color: ThemeColors.white,
    fontSize: 16,
  },
  profile_button: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: ThemeLayouts.flexDirection.row,
    alignItems: ThemeLayouts.alignItems.center,
    gap: 20,
    borderColor: 'rgba(76, 70, 184, 0.2)',
    borderBottomWidth: 0.2,
    backgroundColor: ThemeColors.white,
  },
  profile_button_text: {
    fontFamily: 'OpenSans_500Medium',
    fontSize: 16,
  },
});

export default styles;
