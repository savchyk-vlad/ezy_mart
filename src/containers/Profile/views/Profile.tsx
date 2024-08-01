import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { useAuthentication } from '~providers/auth/AuthenticationProvider';
import { TouchableOpacityButton } from '~components';
import { PROFILE_BUTTONS } from '../profile_buttons';
import { ThemeColors } from '~assets';
import styles from './styles';

const Profile = () => {
  const { logout } = useAuthentication();
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

  return (
    <Animated.ScrollView
      onScroll={handleScrollEvent}
      style={animationActiveStyle}
      contentContainerStyle={styles.profile_container}
      scrollEventThrottle={16}>
      <View style={styles.profile_header}>
        <View style={styles.profile_header_info_container}>
          <Image
            style={styles.profile_image}
            resizeMode="cover"
            source={require('../../../assets/images/fashion/image_2.png')}
          />
          <View>
            <Text style={styles.profile_name}>Mahmodul Hasan</Text>
            <Text style={styles.profile_email}>Info.mahmodul@gmail.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.profile_buttons_container}>
        {PROFILE_BUTTONS.map(item => (
          <TouchableOpacity
            key={item.buttonText}
            onPress={item.pressEvent}
            style={styles.profile_button}>
            <item.icon fill={ThemeColors.black} />
            <Text style={styles.profile_button_text}>{item.buttonText}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacityButton
          onPress={logout}
          text={'Logout'}
          style={{ borderColor: ThemeColors.botticelli }}
        />
      </View>
    </Animated.ScrollView>
  );
};

export default Profile;
