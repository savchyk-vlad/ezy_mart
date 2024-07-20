import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '~types/navigationTypes/navigation.types';

export const useSignUp = () => {
  const navigation = useNavigation<NavigationProps>();

  const goBack = () => navigation.goBack();

  return { goBack };
};
