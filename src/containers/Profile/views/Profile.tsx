import { View } from 'react-native';
import React from 'react';

import { useAuthentication } from '~providers/auth/AuthenticationProvider';
import { TouchableOpacityButton } from '~components';
import { ThemeColors } from '~assets';

const Profile = () => {
  const { logout } = useAuthentication();

  return (
    <View>
      <TouchableOpacityButton
        onPress={logout}
        text={'Logout'}
        style={{ borderColor: ThemeColors.botticelli }}
      />
    </View>
  );
};

export default Profile;
