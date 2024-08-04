import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';

import {
  BackArrowIcon,
  BellIcon,
  BurgerIcon,
  CartIcon,
} from '~assets/images/icons/IconsSvg';
import { useTabNavigatorHeader } from './hooks/useTabNavigatorHeader';
import { useScreenName } from '~hooks';
import styles from './styles';

interface ITabNavigatorHeader {
  title: string;
  screenRouteName: string;
}

interface ITabHomeHeader {
  title: string;
  handleDrawer: () => void;
}

const RightSideIcons = () => {
  return (
    <View style={styles.right_icons_container}>
      <TouchableOpacity>
        <BellIcon />
      </TouchableOpacity>

      <TouchableOpacity>
        <CartIcon />
      </TouchableOpacity>
    </View>
  );
};

const HomeHeader = ({ title, handleDrawer }: ITabHomeHeader) => {
  return (
    <View style={styles.home_header_container}>
      <View style={styles.home_header_burger_container}>
        <TouchableOpacity onPress={handleDrawer}>
          <BurgerIcon width={30} height={30} />
        </TouchableOpacity>

        <Text style={styles.home_header_title}>{title}</Text>
      </View>

      <RightSideIcons />
    </View>
  );
};

const ProfileHeader = () => {
  return <View style={styles.profile_header_container} />;
};

const TabNavigatorHeader = ({
  title,
  screenRouteName,
}: ITabNavigatorHeader) => {
  const { handleBackToHome, handleOpenDrawer } = useTabNavigatorHeader();
  const { isHomeScreen, isTrendingScreen, isProfileScreen } =
    useScreenName(screenRouteName);

  const isRightHeaderItemsVisible = isHomeScreen || isTrendingScreen;
  const profileHeaderStyle = isProfileScreen && styles.profile_header_container;

  return (
    <SafeAreaView
      style={[styles.container, profileHeaderStyle && profileHeaderStyle]}>
      {isHomeScreen && (
        <HomeHeader title={title} handleDrawer={handleOpenDrawer} />
      )}
      {isProfileScreen && <ProfileHeader />}

      {!isHomeScreen && !isProfileScreen && (
        <View style={styles.tab_header_icons_container}>
          <TouchableOpacity
            onPress={handleBackToHome}
            style={styles.back_arrow}>
            <BackArrowIcon width={30} height={30} />
          </TouchableOpacity>

          <View style={styles.header_title_container}>
            <Text style={[styles.home_header_title, styles.header_title]}>
              {title}
            </Text>
          </View>

          {isRightHeaderItemsVisible && <RightSideIcons />}
        </View>
      )}
    </SafeAreaView>
  );
};

export default TabNavigatorHeader;
