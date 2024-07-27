import React from 'react';
import { Image, Text, View } from 'react-native';
import { BarIndicator } from 'react-native-indicators';

import { HEIGHT, WIDTH } from '~constants';
import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: WIDTH, height: HEIGHT, marginLeft: -10 }}
        resizeMode="cover"
        source={require('../../../assets/images/Splash.png')}
      />

      <View style={styles.text_container}>
        <Text style={styles.title}>EzyMart</Text>
        <Text style={styles.description}>
          MedSync: Your Gateway to Better Shoping
        </Text>
      </View>
      <View style={styles.loading_indicator_container}>
        <BarIndicator color="#4C46B8" count={4} />
      </View>
    </View>
  );
};

export default SplashScreen;
