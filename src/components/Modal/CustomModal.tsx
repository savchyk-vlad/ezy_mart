import React from 'react';
import {
  GestureResponderEvent,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal/dist/modal';

import styles from './styles';

interface IProps {
  isVisible: boolean;
  close?: (event?: GestureResponderEvent) => void;
  text?: string;
  textClose?: string;
  description?: string;
  withIcon?: boolean;
  icon?: JSX.Element | null;
}

const CustomModal = ({
  isVisible,
  close,
  text,
  textClose,
  description,
  withIcon,
  icon: Icon,
}: IProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={close}
      style={styles.optionsModalCenteredView}>
      <View style={styles.optionsModalWrapper}>
        {withIcon && <View style={styles.icon_container}>{Icon}</View>}
        <Text style={styles.modal_text}>{text}</Text>

        <Text style={styles.modal_description}>{description}</Text>

        <TouchableOpacity
          onPress={close}
          style={styles.sign_up_button_container}>
          <Text style={styles.sign_up_button_text}>{textClose}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomModal;
