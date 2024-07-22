import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';

import {
  BackArrowIcon,
  BellIcon,
  BurgerIcon,
  CartIcon,
} from '~assets/images/icons/IconsSvg';
import { useScreenName } from '~hooks';
import styles from './styles';

interface ITabNavigatorHeader {
  title: string;
  screen: string;
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

const HomeHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.home_header_container}>
      <View style={styles.home_header_burger_container}>
        <TouchableOpacity>
          <BurgerIcon width={30} height={30} />
        </TouchableOpacity>

        <Text style={styles.home_header_title}>{title}</Text>
      </View>

      <RightSideIcons />
    </View>
  );
};

const TabNavigatorHeader = ({ title, screen }: ITabNavigatorHeader) => {
  const { isHomeScreen, isTrendingScreen } = useScreenName(screen);

  const isRightHeaderItemsVisible = isHomeScreen || isTrendingScreen;

  return (
    <SafeAreaView style={styles.container}>
      {isHomeScreen ? (
        <HomeHeader title={title} />
      ) : (
        <View style={styles.tab_header_icons_container}>
          <TouchableOpacity>
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
