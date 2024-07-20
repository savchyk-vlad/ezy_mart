import React from 'react';

import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

const KeyboardDismissWrapper = ({
  children,
  ...props
}: TouchableWithoutFeedbackProps) => {
  const handleKeyboardDismiss = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss} {...props}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default KeyboardDismissWrapper;
