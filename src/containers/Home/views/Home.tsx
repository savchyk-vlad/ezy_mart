import React from 'react';
import { ScrollView } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { SearchBar } from '~components';
import { NewFashion, NewOffers } from '../components';
import stylesheet from './styles';

const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView
      style={styles.home_view_scrollView}
      contentContainerStyle={styles.home_view_scrollView_container}>
      <SearchBar />
      <NewOffers />
      <NewFashion />
    </ScrollView>
  );
};

export default Home;
