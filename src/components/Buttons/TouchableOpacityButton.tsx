import {
  Text,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

import styles from './styles';

interface ITouchableOpacityProps extends TouchableOpacityProps {
  icon?: React.JSX.Element;
  text: string;
  containerStyles?: ViewStyle;
  textStyles?: TextStyle;
}

const TouchableOpacityButton = ({
  icon,
  text,
  containerStyles,
  textStyles,
  ...props
}: ITouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.touchable_opacity_container, containerStyles]}>
      {icon}
      <Text style={[styles.touchable_opacity_text, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchableOpacityButton;
