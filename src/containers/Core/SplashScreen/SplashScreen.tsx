import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { HEIGHT, WIDTH } from '~constants/dimensions';

const SplashScreen = () => {
  return (
    <View style={styles.contianer}>
      <Image source={require('../../../assets/images/Splash.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
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
});

export default SplashScreen;
