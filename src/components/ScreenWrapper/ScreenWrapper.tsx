import { View, ViewProps } from 'react-native';
import React from 'react';

import styles from './styles';

const ScreenWrapper = ({ children, ...props }: ViewProps) => {
  return (
    <View style={styles.container} {...props}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
