import { SCREENS } from '~constants';

export const useScreenName = (SCREEN: string) => {
  const isSignInScreen = SCREEN === SCREENS.SIGN_IN;
  const isSignUpScreen = SCREEN === SCREENS.SIGN_UP;
  const isOnboardingScreen = SCREEN === SCREENS.ONBOARDING;
  const isHomeScreen = SCREEN === SCREENS.HOME;
  const isFavoritesScreen = SCREEN === SCREENS.FAVORITES;
  const isTrendingScreen = SCREEN === SCREENS.TRENDING;
  const isProfileScreen = SCREEN === SCREENS.PROFILE;

  return {
    isSignInScreen,
    isOnboardingScreen,
    isSignUpScreen,
    isHomeScreen,
    isFavoritesScreen,
    isTrendingScreen,
    isProfileScreen,
  };
};
