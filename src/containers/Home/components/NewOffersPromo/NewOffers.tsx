import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { BannerCarousel } from '~components';
import { BANNERS } from './MOCK';
import styles from './styles';

const NewOffers = () => {
  return (
    <View>
      <View style={styles.header_container}>
        <Text style={styles.header_label}>New offers</Text>
        <TouchableOpacity>
          <Text style={styles.see_all_touchable_opacity_text}>See all</Text>
        </TouchableOpacity>
      </View>
      <BannerCarousel banners={BANNERS} />
    </View>
  );
};

export default NewOffers;
