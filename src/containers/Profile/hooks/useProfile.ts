import { useMemo } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import {
  ProfileCircleIcon,
  CreditCardIcon,
  MapMarkerIcon,
  LockIcon,
  BellRegularIcon,
  ExclamationCircleIcon,
} from '~assets/images/icons/IconsSvg';
import { useAuthentication } from '~providers/auth/AuthenticationProvider';
import { ThemeColors } from '~assets';

export const useProfile = () => {
  const { user } = useAuthentication();
  const scrollViewBackgroundColor = useSharedValue(ThemeColors.purple);

  const handleScrollEvent = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffsetY = e.nativeEvent.contentOffset.y;

    if (currentOffsetY > 0) {
      scrollViewBackgroundColor.value = ThemeColors.white;
    } else {
      scrollViewBackgroundColor.value = ThemeColors.purple;
    }
  };

  const animationActiveStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: scrollViewBackgroundColor.value,
    };
  });

  const { userFullName } = useMemo(
    () => ({
      userFullName: `${user.firstName} ${user.lastName}`,
    }),
    [user.firstName, user.lastName],
  );

  const PROFILE_NAVIGATION_ITEMS = [
    {
      icon: ProfileCircleIcon,
      buttonText: 'Edit Profile',
      pressEvent: () => null,
    },
    {
      icon: CreditCardIcon,
      buttonText: 'Notifications',
      pressEvent: () => null,
    },
    {
      icon: MapMarkerIcon,
      buttonText: 'Promotion',
      pressEvent: () => null,
    },
    {
      icon: LockIcon,
      buttonText: 'Change Password',
      pressEvent: () => null,
    },
    {
      icon: BellRegularIcon,
      buttonText: 'About',
      pressEvent: () => null,
    },
    {
      icon: ExclamationCircleIcon,
      buttonText: 'Settings',
      pressEvent: () => null,
    },
  ];

  return {
    user,
    handleScrollEvent,
    animationActiveStyle,
    userFullName,
    PROFILE_NAVIGATION_ITEMS,
  };
};
