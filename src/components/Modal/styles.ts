import { StyleSheet } from 'react-native';
import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets/theme';
import { HEIGHT, WIDTH } from '~constants/dimensions';

export const styles = StyleSheet.create({
  optionsModalCenteredView: {
    justifyContent: 'flex-end',
    width: WIDTH,
    height: HEIGHT,
    marginLeft: 0,
    marginBottom: 0,
  },
  optionsModalWrapper: {
    backgroundColor: ThemeColors.white,
    height: 340,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
  },
  sign_up_button_container: {
    marginTop: 40,
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
  modal_text: {
    paddingBottom: 10,
    fontFamily: 'Inter_600SemiBold',
    fontSize: 30,
    textAlign: 'center',
  },
  modal_description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#7B7D82',
  },
  icon_container: {
    alignItems: 'center',
    top: -50,
  },
});

export default styles;
