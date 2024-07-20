import { StyleSheet } from 'react-native';

import { ThemeColors } from '~assets';
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
  sign_up_button_container: {
    marginTop: 44,
    width: '100%',
    backgroundColor: '#4C46B8',
    padding: 20,
    borderRadius: 8,
  },
  sign_up_button_text: {
    textAlign: 'center',
    color: ThemeColors.white,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  checkbox_container: {
    flexDirection: 'row',
  },
  checkbox: {
    padding: 0,
    paddingTop: 8,
  },
  checkbox_label: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
  already_have_account_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 26,
  },
  sign_up_button_aside_text: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
  sigh_up_button_title: {
    color: '#4C46B8',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    paddingLeft: 4,
  },
  checkbox_hyperlink: {
    color: '#4C46B8',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    paddingLeft: 4,
  },
});

export default styles;
