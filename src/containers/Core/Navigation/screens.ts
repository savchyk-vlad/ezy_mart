import { SCREENS } from "~constants";

import { SignIn } from "../../Login";
import { Onboarding } from "~containers/Onboarding";
import { SignUp } from "~containers/Login/views/SignUp";

export const AUTH_SCREENS = [
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

