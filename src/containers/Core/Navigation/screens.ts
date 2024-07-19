import { SCREENS } from "~constants";

import { SignIn } from "../../Login";
import { imagePathes } from "~assets/images/images";

import { Onboarding } from "~containers/Onboarding";
import { SignUp } from "~containers/Login/views/SignUp";

export const AppScreens = [
  {
    name: SCREENS.ONBOARDING,
    component: Onboarding,
  },
  {
    name: SCREENS.SIGN_IN,
    component: SignIn,
  },
  {
    name: SCREENS.SIGN_UP,
    component: SignUp,
  },
];

export const MOCK_ONBOARDING_SCREENS = [
  {
    name: SCREENS.ONBOARDING,
    headerText: "Discover Endless Shopping Possibilities",
    imagePath: imagePathes.onboardingBg1ImagePath,
  },
  {
    name: SCREENS.ONBOARDING,
    headerText: "Effortless Shopping Experience",
    imagePath: imagePathes.onboardingBg2ImagePath,
  },
  {
    name: SCREENS.ONBOARDING,
    headerText: "Stay Ahead of the Latest Trends",
    paragraph: "Welcome Aboard EziBuy: Navigating Your Health Journey",
    imagePath: imagePathes.onboardingBg3ImagePath,
  },
];
