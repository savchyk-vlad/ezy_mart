import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';

import {
  CustomFormInput,
  KeyboardDismissWrapper,
  TouchableOpacityButton,
} from '~components';
import { useSignIn } from './hooks/useSignIn';
import { useValidation } from './hooks/useValidation';
import { useAuthentication } from '~providers/auth/AuthenticationProvider';

import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
} from '~assets/images/icons/IconsSvg';
import { PLATFORM } from '~constants';
import styles from './styles';

const initialValues = { email: '', password: '' };

const SignIn = () => {
  const { goToSignUp } = useSignIn();
  const { validationSchema } = useValidation();
  const { loginFromGoogle } = useAuthentication();

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
                  typeInput={'EMAIL'}
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
                  typeInput={'PASSWORD'}
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

                <TouchableOpacityButton
                  icon={<AppleIcon />}
                  text={'Continue with Apple'}
                />

                <TouchableOpacityButton
                  icon={
                    <View style={styles.facebook_icon_container}>
                      <FacebookIcon
                        width={26}
                        height={26}
                        style={styles.facebook_icon}
                      />
                    </View>
                  }
                  text={'Continue with Facebook'}
                />

                <TouchableOpacityButton
                  onPress={loginFromGoogle}
                  icon={<GoogleIcon width={26} height={22} />}
                  text={'Continue with Google'}
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardDismissWrapper>
  );
};

export default SignIn;
