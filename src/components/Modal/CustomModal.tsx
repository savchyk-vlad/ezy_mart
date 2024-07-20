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
}

const CustomModal = ({
  isVisible,
  close,
  text,
  textClose,
  description,
}: IProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={close}
      style={styles.optionsModalCenteredView}>
      <View style={styles.optionsModalWrapper}>
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
