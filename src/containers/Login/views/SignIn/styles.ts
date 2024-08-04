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
  forgot_password_text: {
    textAlign: 'right',
    color: '#4C46B8',
    fontFamily: 'Inter_500Medium',
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
    textAlign: 'center',
    color: ThemeColors.white,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  sign_up_button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  sign_up_button_aside_text: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
  },
  sigh_up_button_title: {
    color: '#4C46B8',
    fontFamily: 'Inter_400Regular',
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
    position: 'absolute',
    fontFamily: 'Inter_500Medium',
    color: '#D3D4D5',
    textAlign: 'center',
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
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  forgot_password_container: {
    marginTop: 20,
  },
  auth_button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: ThemeColors.white,
    padding: 20,
  },
  auth_button_label: {
    textAlign: 'center',
    fontFamily: 'Inter_500Medium',
    fontSize: 20,
    paddingLeft: 20,
  },
});

export default styles;
