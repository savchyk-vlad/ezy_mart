import { SCREENS } from '~constants';

export const useScreenName = (SCREEN: string) => {
  const isSignInScreen = SCREEN === SCREENS.SIGN_IN;
  const isSignUpScreen = SCREEN === SCREENS.SIGN_UP;
  const isOnboardingScreen = SCREEN === SCREENS.ONBOARDING;

  return { isSignInScreen, isOnboardingScreen, isSignUpScreen };
};
