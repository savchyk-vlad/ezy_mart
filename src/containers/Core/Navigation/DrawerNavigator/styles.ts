import { StyleSheet } from 'react-native';
import { ThemeColors } from '~assets';
import { WIDTH } from '~constants';

export const styles = StyleSheet.create({
  drawer_header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    padding: 20,
  },
  drawer_header_logo: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
  },
  drawer_header_underline: {
    height: 1,
    width: '100%',
    backgroundColor: ThemeColors.botticelli,
  },
  drawer_item_container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontFamily: 'Poppins_500Medium',
    color: ThemeColors.purple,
    fontSize: 20,
  },
  drawer_in_active_item_label: {
    fontFamily: 'Poppins_500Medium',
    color: ThemeColors.drawer_in_active,
    fontSize: 20,
  },
  drawer_switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginLeft: 80,
    marginBottom: 6,
  },
  drawer_log_out_item_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    width: '86%',
  },
  drawer_log_out_item_label: {
    fontFamily: 'Poppins_500Medium',
    color: ThemeColors.orange,
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
