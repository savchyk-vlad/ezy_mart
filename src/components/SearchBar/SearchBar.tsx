import { View } from 'react-native';
import React, { useState } from 'react';

import { ScreenWrapper } from '~components/ScreenWrapper';
import { CustomFormInput } from '~components/Inputs';
import { FilterIcon } from '~assets/images/icons/IconsSvg';
import { INPUTS } from '~constants';
import styles from './styles';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: string) => {
    setSearchValue(e);
  };
  return (
    <ScreenWrapper>
      <View style={styles.search_bar_container}>
        <CustomFormInput
          containerStyles={styles.input_container_style}
          inputStyles={styles.input_style}
          handleChange={handleSearchValue}
          typeInput={INPUTS.SEARCH}
          placeholder={'Search'}
          inputMode={'text'}
          value={searchValue}
        />

        <FilterIcon />
      </View>
    </ScreenWrapper>
  );
};

export default SearchBar;
