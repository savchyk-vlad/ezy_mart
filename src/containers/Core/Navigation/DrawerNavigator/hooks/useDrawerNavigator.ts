import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useState } from 'react';

import { NavigationProps } from '~types/navigationTypes/navigation.types';
import { SCREENS } from '~constants';

export interface IDrawerItem {
  iconName: string;
  label: string;
  navigationAction?: () => void;
  switchAction?: () => void;
  isNightModeActive?: boolean;
}

export const useDrawerNavigator = () => {
  const { navigate, dispatch } = useNavigation<NavigationProps>();
  const [nightMode, setNightMode] = useState(false);

  const handleCloseDrawer = () => dispatch(DrawerActions.closeDrawer());

  const DRAWER_NAVIGATION_ITEMS: IDrawerItem[] = [
    {
      iconName: 'house',
      label: 'Home',
      navigationAction: () => navigate(SCREENS.HOME),
    },
    {
      iconName: 'user',
      label: 'Profile',
      navigationAction: () => navigate(SCREENS.PROFILE),
    },
    {
      iconName: 'cart-shopping',
      label: 'My Cart',
      navigationAction: () => navigate(SCREENS.CART),
    },
    {
      iconName: 'heart',
      label: 'Favorites',
      navigationAction: () => navigate(SCREENS.FAVORITES),
    },
    {
      iconName: 'dollar-sign',
      label: 'Merchant',
      navigationAction: () => navigate(SCREENS.MERCHANT),
    },
    {
      iconName: 'gears',
      label: 'Settings',
      navigationAction: () => navigate(SCREENS.SETTINGS),
    },
    {
      iconName: 'moon',
      label: 'Night Mode',
      switchAction: () => setNightMode(!nightMode),
      isNightModeActive: nightMode,
    },
    {
      iconName: 'users-gear',
      label: 'Help and Support',
      navigationAction: () => navigate(SCREENS.SUPPORT),
    },
  ];

  return {
    handleCloseDrawer,
    navigate,
    DRAWER_NAVIGATION_ITEMS,
  };
};
