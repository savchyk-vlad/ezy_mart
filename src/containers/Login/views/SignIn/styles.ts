import { StyleSheet } from 'react-native';

import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets';
import { WIDTH } from '~constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  form_container: {
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  forgot_password_text: {
    textAlign: ThemeFonts.textAlign.right,
    color: '#4C46B8',
    fontFamily: ThemeFonts.fontFamily.Inter.Medium,
    fontSize: 18,
  },
  submit_button_container: {
    marginTop: 24,
    width: '100%',
    backgroundColor: '#4C46B8',
    padding: 20,
    borderRadius: 8,
  },
  submit_button_text: {
    textAlign: ThemeFonts.textAlign.center,
    color: ThemeColors.white,
    fontFamily: ThemeFonts.fontFamily.Poppins.SemiBold,
    fontSize: 20,
  },
  sign_up_button_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    justifyContent: ThemeLayouts.justifyContent.center,
    marginTop: 16,
  },
  sign_up_button_aside_text: {
    fontFamily: ThemeFonts.fontFamily.Inter.Regular,
    fontSize: 18,
  },
  sigh_up_button_title: {
    color: '#4C46B8',
    fontFamily: ThemeFonts.fontFamily.Inter.Regular,
    fontSize: 18,
    paddingLeft: 4,
  },
  line_divider_container: {
    height: 1,
    width: '100%',
    backgroundColor: '#E9E9EA',
    marginVertical: 60,
  },
  line_divider_text: {
    top: -7,
    left: (WIDTH - 136) / 2,
    position: ThemeLayouts.position.absolute,
    fontFamily: ThemeFonts.fontFamily.Inter.Medium,
    color: '#D3D4D5',
    textAlign: ThemeFonts.textAlign.center,
    verticalAlign: 'middle',
    paddingHorizontal: 30,
    backgroundColor: '#FFFFFF',
  },
  facebook_icon_container: {
    backgroundColor: '#2AA4F4',
    width: 28,
    height: 28,
    borderRadius: 100,
  },
  facebook_icon: {
    position: ThemeLayouts.position.absolute,
    bottom: 0,
    right: 0,
  },
  forgot_password_container: {
    marginTop: 20,
  },
  auth_button_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    alignItems: ThemeLayouts.alignItems.center,
    justifyContent: ThemeLayouts.justifyContent.center,
    marginBottom: 18,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: ThemeColors.white,
    padding: 20,
  },
  auth_button_label: {
    textAlign: ThemeFonts.textAlign.center,
    fontFamily: ThemeFonts.fontFamily.Inter.Medium,
    fontSize: 20,
    paddingLeft: 20,
  },
});

export default styles;
