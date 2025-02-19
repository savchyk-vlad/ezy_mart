import { JSX } from 'react';

import { useScreenName } from '~hooks';
import { ThemeColors, ThemeLayouts } from '~assets/theme';
import { BackArrowIcon } from '~assets/images/icons/IconsSvg';

type IScreen = {
  name: string;
  component?: () => JSX.Element;
};

export const styleOptions = (screen: IScreen) => {
  const { isSignInScreen, isSignUpScreen, isOnboardingScreen } = useScreenName(
    screen.name,
  );

  const signInScreenOptions = isSignInScreen && {
    headerLeft: () => null,
    gestureEnabled: false,
    headerStyle: {
      backgroundColor: ThemeColors.white,
    },
    headerTitleStyle: {
      fontFamily: 'PlusJakartaSans_600SemiBold',
    },
    headerTitle: 'Login',
    headerShadowVisible: false,
  };

  const signUpScreenOptions = isSignUpScreen && {
    headerStyle: {
      backgroundColor: ThemeColors.white,
    },
    headerBack: () => <BackArrowIcon />,
    headerTitleStyle: {
      fontFamily: 'PlusJakartaSans_600SemiBold',
    },
    headerTitle: 'Sign Up',
    headerShadowVisible: false,
  };

  const onboardingScreenOptions = isOnboardingScreen && {
    headerTransparent: true,
    headerTitle: '',
    headerLeft: () => null,
    gestureEnabled: false,
  };

  return {
    headerStyle: {
      borderBottomWidth: ThemeLayouts.borderWidth.default,
      borderBottomColor: ThemeColors.black,
    },
    ...signInScreenOptions,
    ...signUpScreenOptions,
    ...onboardingScreenOptions,
  };
};
