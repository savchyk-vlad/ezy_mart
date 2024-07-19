import { SCREENS } from "~constants";

const useScreenName = (SCREEN: string) => {
  const isSignInScreen = SCREEN === SCREENS.SIGN_IN;
  const isSignUpScreen = SCREEN === SCREENS.SIGN_UP;
  const isOnboardingScreen = SCREEN === SCREENS.ONBOARDING;

  return { isSignInScreen, isOnboardingScreen, isSignUpScreen };
};

export default useScreenName;
