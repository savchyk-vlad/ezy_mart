import { StyleSheet } from 'react-native';

import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.white,
  },
  form_container: {
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  sign_up_button_container: {
    marginTop: 44,
    width: '100%',
    backgroundColor: '#4C46B8',
    padding: 20,
    borderRadius: 8,
  },
  sign_up_button_text: {
    textAlign: ThemeFonts.textAlign.center,
    color: ThemeColors.white,
    fontFamily: ThemeFonts.fontFamily.Poppins.SemiBold,
    fontSize: 20,
  },
  checkbox_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
  },
  checkbox: {
    padding: 0,
    paddingTop: 8,
  },
  checkbox_label: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: ThemeFonts.fontFamily.Inter.Regular,
  },
  already_have_account_container: {
    flexDirection: ThemeLayouts.flexDirection.row,
    justifyContent: ThemeLayouts.justifyContent.center,
    marginTop: 26,
  },
  sign_up_button_aside_text: {
    fontFamily: ThemeFonts.fontFamily.Inter.Regular,
    fontSize: 16,
  },
  sigh_up_button_title: {
    color: '#4C46B8',
    fontFamily: ThemeFonts.fontFamily.Inter.Regular,
    fontSize: 16,
    paddingLeft: 4,
  },
  checkbox_hyperlink: {
    color: '#4C46B8',
    fontFamily: ThemeFonts.fontFamily.Inter.Regular,
    fontSize: 14,
    paddingLeft: 4,
  },
});

export default styles;
