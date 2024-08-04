import { useNavigation } from '@react-navigation/native';

import { NavigationProps } from '~types/navigationTypes/navigation.types';
import { useAuthentication } from '~providers/auth/AuthenticationProvider';
import { FacebookIcon, GoogleIcon } from '~assets/images/icons/IconsSvg';
import { SCREENS } from '~constants';

interface IAuthButton {
  icon: JSX.Element;
  action: () => void;
  label: string;
}

export const useSignIn = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const { loginFromGoogle, loginFromFacebook } = useAuthentication();

  const goToSignUp = () => navigate(SCREENS.SIGN_UP);

  const AUTH_BUTTONS: IAuthButton[] = [
    {
      icon: <FacebookIcon width={26} height={26} />,
      action: () => loginFromFacebook(),
      label: 'Continue with Facebook',
    },
    {
      icon: <GoogleIcon width={29} height={29} />,
      action: () => loginFromGoogle(),
      label: 'Continue with Google',
    },
  ];

  return { goToSignUp, AUTH_BUTTONS };
};
