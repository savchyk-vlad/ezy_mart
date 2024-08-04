import { DrawerActions, useNavigation } from '@react-navigation/native';

import { NavigationProps } from '~types/navigationTypes/navigation.types';
import { SCREENS } from '~constants';

export const useTabNavigatorHeader = () => {
  const { goBack, navigate, dispatch } = useNavigation<NavigationProps>();

  const handleBack = () => goBack();
  const handleBackToHome = () => navigate(SCREENS.HOME);
  const handleOpenDrawer = () => dispatch(DrawerActions.openDrawer());

  return { handleBack, handleBackToHome, handleOpenDrawer };
};
