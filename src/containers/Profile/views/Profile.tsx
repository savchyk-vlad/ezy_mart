import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useProfile } from '../hooks/useProfile';
import { ThemeColors } from '~assets';
import styles from './styles';

const Profile = () => {
  const {
    user,
    handleScrollEvent,
    animationActiveStyle,
    userFullName,
    PROFILE_NAVIGATION_ITEMS,
  } = useProfile();

  return (
    <Animated.ScrollView
      onScroll={handleScrollEvent}
      style={animationActiveStyle}
      contentContainerStyle={styles.profile_container}
      scrollEventThrottle={16}>
      <View style={styles.profile_header}>
        <View style={styles.profile_header_info_container}>
          {user?.image && (
            <Image
              style={styles.profile_image}
              resizeMode="cover"
              source={{ uri: user.image }}
            />
          )}
          <View>
            <Text style={styles.profile_name}>{userFullName}</Text>
            <Text style={styles.profile_email}>{user.email}</Text>
          </View>
        </View>
      </View>

      <View style={styles.profile_buttons_container}>
        {PROFILE_NAVIGATION_ITEMS.map(item => (
          <TouchableOpacity
            key={item.buttonText}
            onPress={item.pressEvent}
            style={styles.profile_button}>
            <item.icon fill={ThemeColors.black} />
            <Text style={styles.profile_button_text}>{item.buttonText}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.ScrollView>
  );
};

export default Profile;
