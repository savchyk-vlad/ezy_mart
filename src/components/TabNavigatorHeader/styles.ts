import { StyleSheet } from 'react-native';

import { WIDTH } from '~constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: WIDTH,
  },
  right_icons_container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  home_header_container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  home_header_burger_container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  home_header_title: {
    color: '#323131',
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 24,
    paddingLeft: 20,
  },
  tab_header_icons_container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  header_title_container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_title: {
    paddingLeft: 0,
  },
});

export default styles;
