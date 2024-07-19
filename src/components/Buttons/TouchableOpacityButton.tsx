import { Text, TouchableOpacity, TextStyle, ViewStyle } from "react-native";
import React from "react";

import styles from "./styles";

type TouchableOpacityProps = {
  icon: React.JSX.Element;
  text: string;
  containerStyles?: ViewStyle;
  textStyles?: TextStyle;
};

const TouchableOpacityButton = ({
  icon,
  text,
  containerStyles,
  textStyles,
}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={[styles.touchable_opacity_container, containerStyles]}
    >
      {icon}
      <Text style={[styles.touchable_opacity_text, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchableOpacityButton;
