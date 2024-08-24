import { StyleSheet } from 'react-native';
import { ThemeColors, ThemeFonts, ThemeLayouts } from '~assets';
import { HEIGHT, WIDTH } from '~constants';

export const styles = StyleSheet.create({
  container: {
    width: WIDTH,
  },
  image: {
    position: ThemeLayouts.position.absolute,
    top: 0,
    left: 0,
    height: HEIGHT,
    width: WIDTH,
    resizeMode: 'cover',
  },
  skipButton: {
    fontFamily: ThemeFonts.fontFamily.Poppins.Medium,
    textAlign: ThemeFonts.textAlign.right,
    fontSize: ThemeFonts.fontSize.xxxxl,
    paddingHorizontal: ThemeLayouts.padding.xxxxxxl,
    paddingVertical: ThemeLayouts.padding.xl,
    color: ThemeColors.riverBed,
  },
  bottomPopUp: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    height: '42%',
    top: '60%',
    borderRadius: 40,
    overflow: 'hidden',
  },
  popUpText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 34,
  },
  popUpBottomContainer: {
    flexDirection: ThemeLayouts.flexDirection.row,
    justifyContent: 'flex-end',
    marginVertical: 50,
    marginHorizontal: 10,
  },
  popUpPointsContainer: {
    flexDirection: ThemeLayouts.flexDirection.row,
    marginTop: 7,
    justifyContent: ThemeLayouts.justifyContent.spaceBetween,
  },
  popUpPoint: {
    backgroundColor: '#A7A8AC',
    height: 8,
    width: 22,
    borderRadius: 5,
    marginHorizontal: 0,
  },
  popUpPointActive: {
    backgroundColor: '#FFF',
    height: 8,
    width: 32,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  popUpNextButton: {
    backgroundColor: '#4C46B8',
    padding: 20,
    borderRadius: 50,
  },
  popUpParagraph: {
    fontFamily: ThemeFonts.fontFamily.Inter.Regular,
    fontSize: 20,
    textAlign: ThemeFonts.textAlign.center,
    paddingTop: 20,
  },
  popUpButton: {
    backgroundColor: '#4C46B8',
    borderRadius: 16,
    paddingVertical: 20,
    marginTop: 28,
  },
  popUpButtonText: {
    textAlign: ThemeFonts.textAlign.center,
    fontFamily: 'Inter_600SemiBold',
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default styles;
