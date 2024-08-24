import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import { useDrawerNavigator, IDrawerItem } from './hooks/useDrawerNavigator';
import { useAuthentication } from '~providers/auth/AuthenticationProvider';
import { XIcon } from '~assets/images/icons/IconsSvg';
import { ThemeColors } from '~assets';
import { stylesheet } from './styles';
import { useStyles } from 'react-native-unistyles';

const DrawerContent = ({ ...props }) => {
  const { handleCloseDrawer, DRAWER_NAVIGATION_ITEMS } = useDrawerNavigator();
  const { logout } = useAuthentication();

  const { styles } = useStyles(stylesheet);

  const switchActiveColor = '#448FFF';
  const switchInActiveColor = '#dedede';

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawer_header_container}>
        <Text style={styles.drawer_header_logo}>EzyMart</Text>
        <TouchableOpacity onPress={handleCloseDrawer}>
          <XIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.drawer_header_underline} />

      {DRAWER_NAVIGATION_ITEMS.map((drawerItem: IDrawerItem, index) => (
        <TouchableOpacity
          key={drawerItem.label}
          disabled={drawerItem.switchAction && true}
          onPress={drawerItem.navigationAction}
          style={styles.drawer_item_container}>
          <View
            style={[
              styles.drawer_active_marker,
              !!index && styles.drawer_in_active_marker,
            ]}
          />
          <Icon
            name={drawerItem.iconName}
            size={20}
            style={styles.drawer_item_icon}
            color={!index ? ThemeColors.purple : ThemeColors.drawer_in_active}
          />
          <Text
            style={[
              styles.drawer_item_label,
              !!index && styles.drawer_in_active_item_label,
            ]}>
            {drawerItem.label}
          </Text>

          {drawerItem.switchAction && (
            <Switch
              style={styles.drawer_switch}
              trackColor={{
                true: switchActiveColor,
                false: switchInActiveColor,
              }}
              ios_backgroundColor={switchInActiveColor}
              value={drawerItem.isNightModeActive}
              onValueChange={drawerItem.switchAction}
            />
          )}
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.drawer_log_out_item_container}
        onPress={logout}>
        <Icon
          name={'door-open'}
          size={30}
          style={styles.drawer_item_icon}
          color={ThemeColors.orange}
        />
        <Text style={styles.drawer_log_out_item_label}>Log out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
