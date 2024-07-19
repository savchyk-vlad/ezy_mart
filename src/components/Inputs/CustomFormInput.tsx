import {
  View,
  TextInput,
  TouchableOpacity,
  ViewStyle,
  InputModeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Text,
} from "react-native";
import React, { useState } from "react";

import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockIcon,
  SuccessIcon,
} from "~assets/images/icons/IconsSvg";
import styles from "./styles";
import { FormikErrors } from "formik";

type IInputProps = {
  typeInput: string;
  handleChange: (e: string) => void;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder: string;
  inputMode: InputModeOptions;
  inputStyles?: ViewStyle;
  containerStyles?: ViewStyle;
  value: { email: string; password: string };
  withSuccesIcon?: boolean;
  withVisibilityButton?: boolean;
  error: FormikErrors<{
    email: string;
    password: string;
  }>;
};

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
}: IInputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleVisibilityContent = () =>
    setPasswordVisibility(!passwordVisibility);

  // const ICON_COLOR = () => {
  //   if (error?.email || error?.password) {
  //     return "!!value.email.length && isEmailError";
  //   } else if (value.length > 0) {
  //     return "#1D4ED8";
  //   }
  //   return "#A7A8AC";
  // };

  const isPasswordError = error?.password;
  const isEmailError = error?.email;

  const EMAIL_ICON_COLOR =
    !!value.email.length && isEmailError
      ? "#FF5C5C"
      : !!value.email.length
      ? "#1D4ED8"
      : "#A7A8AC";

  const PASSWORD_ICON_COLOR =
    !!value.password.length && isPasswordError
      ? "#FF5C5C"
      : !!value.password.length
      ? "#1D4ED8"
      : "#A7A8AC";

  const EMAIL_ERROR_COLOR =
    (!!value.email.length && isEmailError && "#FF5C5C") || "#E5E7EB";

  const PASSWORD_ERROR_COLOR =
    (!!value.password.length && isPasswordError && "#FF5C5C") || "#E5E7EB";

  if (typeInput === "EMAIL") {
    return (
      <View
        style={[
          styles.email_input_container,
          containerStyles,
          { borderColor: EMAIL_ERROR_COLOR },
        ]}
      >
        <View style={styles.email_input_inner_view}>
          <View style={{ paddingRight: 10 }}>
            <EnvelopeIcon fill={EMAIL_ICON_COLOR} />
          </View>

          <TextInput
            style={[styles.email_input, inputStyles]}
            onChangeText={handleChange}
            onBlur={handleBlur}
            value={value.email}
            placeholder={placeholder}
            inputMode={inputMode}
          />

          {withSuccesIcon && !!value.email.length && !isEmailError && (
            <SuccessIcon style={{ opacity: 1}} />
          )}
        </View>

        {value.email.length > 0 && (
          <Text style={[styles.error_text, { color: EMAIL_ERROR_COLOR }]}>
            {error.email}
          </Text>
        )}
      </View>
    );
  }

  if (typeInput === "PASSWORD") {
    return (
      <View
        style={[
          styles.password_input_container,
          containerStyles,
          { borderColor: PASSWORD_ERROR_COLOR },
        ]}
      >
        <View style={styles.password_input_inner_view}>
          <View style={{ paddingRight: 14 }}>
            <LockIcon fill={PASSWORD_ICON_COLOR} />
          </View>

          <TextInput
            style={[styles.password_input, inputStyles]}
            onChangeText={handleChange}
            onBlur={handleBlur}
            value={value.password}
            placeholder={placeholder}
            inputMode={inputMode}
            secureTextEntry={withVisibilityButton && !passwordVisibility}
          />
        </View>

        {withVisibilityButton && (
          <TouchableOpacity
            onPress={handleVisibilityContent}
            style={{ padding: 10 }}
          >
            {!passwordVisibility ? <EyeSlashIcon /> : <EyeIcon />}
          </TouchableOpacity>
        )}

        {value.password.length > 0 && (
          <Text style={[styles.error_text, { color: PASSWORD_ERROR_COLOR }]}>
            {error.password}
          </Text>
        )}
      </View>
    );
  }
};

export default CustomFormInput;
