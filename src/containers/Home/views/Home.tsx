import React from 'react';
import { ScrollView } from 'react-native';

import { NewOffers } from '../components/NewOffersPromo';
import { SearchBar } from '~components';
import styles from './styles';

const Home = () => {
  return (
    <ScrollView
      style={styles.home_view_scrollView}
      contentContainerStyle={styles.home_view_scrollView_container}>
      <SearchBar />
      <NewOffers />
    </ScrollView>
  );
};

export default Home;
