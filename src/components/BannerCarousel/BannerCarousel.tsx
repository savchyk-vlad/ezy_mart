import React from 'react';
import { Image, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { WIDTH } from '~constants';
import { IBanner } from '~types';
import styles from './styles';

const BannerCarousel = ({ banners }: { banners: IBanner[] }) => {
  const baseOptions = {
    vertical: false,
    width: WIDTH * 0.85,
    height: 160,
  } as const;

  return (
    <View style={styles.carousel_container}>
      <Carousel
        {...baseOptions}
        loop
        style={styles.carousel_style}
        autoPlay
        pagingEnabled
        autoPlayInterval={5000}
        snapEnabled
        scrollAnimationDuration={2000}
        data={banners}
        renderItem={({ item }) => {
          return (
            <View style={styles.banner_container}>
              <Image
                style={styles.banner_image}
                resizeMode="cover"
                source={item.imagePath}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default BannerCarousel;
