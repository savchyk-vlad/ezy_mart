import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';

import { useValidation } from './hooks/useValidation';
import { useSignIn } from './hooks/useSignIn';

import { CustomFormInput, KeyboardDismissWrapper } from '~components';
import { INPUTS, PLATFORM } from '~constants';
import styles from './styles';

const initialValues = { email: '', password: '' };

const SignIn = () => {
  const { goToSignUp, AUTH_BUTTONS } = useSignIn();
  const { validationSchema } = useValidation();

  return (
    <KeyboardDismissWrapper>
      <KeyboardAwareScrollView
        style={styles.container}
        enableOnAndroid={true}
        extraHeight={PLATFORM.isAndroid ? 50 : 0}
        extraScrollHeight={50}
        enableResetScrollToCoords={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <View style={styles.form_container}>
                <CustomFormInput
                  typeInput={INPUTS.EMAIL}
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  placeholder={'Enter your email'}
                  inputMode={'email'}
                  value={values.email}
                  error={errors.email}
                  withSuccesIcon={true}
                  autoCapitalize={'none'}
                  touched={touched.email}
                />

                <CustomFormInput
                  typeInput={INPUTS.PASSWORD}
                  handleChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                  placeholder={'Enter your password'}
                  inputMode={'text'}
                  value={values.password}
                  error={errors.password}
                  withVisibilityButton
                />

                <TouchableOpacity style={styles.forgot_password_container}>
                  <Text style={styles.forgot_password_text}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  disabled={!isValid}
                  onPress={handleSubmit}
                  style={styles.submit_button_container}>
                  <Text style={styles.submit_button_text}>Login</Text>
                </TouchableOpacity>

                <View style={styles.sign_up_button_container}>
                  <Text
                    style={
                      styles.sign_up_button_aside_text
                    }>{`Don't have an account?`}</Text>
                  <TouchableOpacity onPress={goToSignUp}>
                    <Text style={styles.sigh_up_button_title}>Sign Up</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.line_divider_container}>
                  <Text style={styles.line_divider_text}>OR</Text>
                </View>

                {AUTH_BUTTONS.map(button => (
                  <TouchableOpacity
                    key={button.label}
                    style={styles.auth_button_container}
                    onPress={button.action}>
                    {button.icon}
                    <Text style={styles.auth_button_label}>{button.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardDismissWrapper>
  );
};

export default SignIn;
