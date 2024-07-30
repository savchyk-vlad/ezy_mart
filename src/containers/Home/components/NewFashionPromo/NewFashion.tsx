import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { Card, ScreenWrapper } from '~components';
import styles from './styles';

import { FASHION_PRODUCTS } from './MOCK';

const NewFashion = () => {
  return (
    <>
      <ScreenWrapper style={styles.container}>
        <View style={styles.header_container}>
          <Text style={styles.header_label}>New Fashion</Text>
          <TouchableOpacity>
            <Text style={styles.see_all_touchable_opacity_text}>See all</Text>
          </TouchableOpacity>
        </View>
      </ScreenWrapper>

      <View>
        <FlatList
          horizontal
          contentContainerStyle={styles.flatList_container}
          showsHorizontalScrollIndicator={false}
          data={FASHION_PRODUCTS}
          renderItem={({ item }) => <Card product={item} />}
          keyExtractor={item => item.image as string}
        />
      </View>
    </>
  );
};

export default NewFashion;
