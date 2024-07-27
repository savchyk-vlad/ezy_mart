import { StyleSheet } from 'react-native';

import { WIDTH, HEIGHT } from '~constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  text_container: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 26,
  },
  description: {
    paddingTop: 5,
    width: '50%',
    textAlign: 'center',
  },
  loading_indicator_container: {
    position: 'absolute',
    top: 600,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
