import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ViewStyle,
  InputModeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Text,
} from 'react-native';

import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockIcon,
  SuccessIcon,
  UserIcon,
} from '~assets/images/icons/IconsSvg';
import styles from './styles';

interface IInputProps {
  typeInput: string;
  handleChange: (e: string) => void;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder: string;
  inputMode: InputModeOptions;
  inputStyles?: ViewStyle;
  containerStyles?: ViewStyle;
  value: string | undefined;
  withSuccesIcon?: boolean;
  withVisibilityButton?: boolean;
  error: string | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}

const CustomFormInput = ({
  typeInput,
  handleChange,
  handleBlur,
  placeholder,
  inputMode,
  inputStyles,
  containerStyles,
  value,
  withSuccesIcon,
  withVisibilityButton,
  error,
  autoCapitalize,
}: IInputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleVisibilityContent = () =>
    setPasswordVisibility(!passwordVisibility);

  const isTypeEmail = typeInput === 'EMAIL';
  const isTypePassword = typeInput === 'PASSWORD';
  const isTypeUserName = typeInput === 'USER_NAME';

  const ICON_COLOR = () => {
    if (value?.length && error) {
      return '#FF5C5C';
    } else if (value?.length) {
      return '#1D4ED8';
    }

    return '#A7A8AC';
  };

  const ERROR_COLOR = () => {
    if (value?.length && error) {
      return '#FF5C5C';
    }

    return '#E5E7EB';
  };

  return (
    <View
      style={[
        styles.input_container,
        containerStyles,
        { borderColor: ERROR_COLOR() },
      ]}>
      <View style={styles.input_inner_view}>
        <View style={styles.input_icon_container}>
          {isTypeEmail && <EnvelopeIcon fill={ICON_COLOR()} />}
          {isTypeUserName && <UserIcon fill={ICON_COLOR()} />}
          {isTypePassword && <LockIcon fill={ICON_COLOR()} />}
        </View>

        <TextInput
          style={[styles.input, inputStyles]}
          onChangeText={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          inputMode={inputMode}
          secureTextEntry={withVisibilityButton && !passwordVisibility}
          autoCapitalize={autoCapitalize}
        />

        {withSuccesIcon && !error && (
          <SuccessIcon style={styles.success_icon} />
        )}

        {withVisibilityButton && (
          <TouchableOpacity
            onPress={handleVisibilityContent}
            style={styles.visibility_button}>
            {!passwordVisibility ? <EyeSlashIcon /> : <EyeIcon />}
          </TouchableOpacity>
        )}
      </View>

      {value && value?.length && (
        <Text style={[styles.error_text, { color: ERROR_COLOR() }]}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default CustomFormInput;
