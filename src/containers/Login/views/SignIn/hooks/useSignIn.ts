import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '~types/navigationTypes/navigation.types';

import { SCREENS } from '~constants';

export const useSignIn = () => {
  const navigation = useNavigation<NavigationProps>();

  const goToSignUp = () => {
    navigation.navigate(SCREENS.SIGN_UP, {});
  };

  return { goToSignUp };
};
