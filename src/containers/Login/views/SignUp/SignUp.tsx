import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';

import {
  CustomFormInput,
  CustomModal,
  KeyboardDismissWrapper,
} from '~components';
import { PLATFORM } from '~constants';
import { useValidation } from './hooks/useValidation';
import styles from './styles';
import { useSignUp } from './hooks/useSignUp';

const initialValues = {
  userName: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const SignUp = () => {
  const { validationSchema } = useValidation();
  const { goBack } = useSignUp();

  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleVisibilityModal = () => {
    setModalVisible(!isModalVisible);
  };

  const goBackHandle = () => {
    let timeout: number;
    handleVisibilityModal();

    timeout = setTimeout(() => goBack(), 400);
    return () => clearTimeout(timeout);
  };

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
            validateOnMount={true}
            initialValues={initialValues}
            onSubmit={values => {
              console.log(values);
              handleVisibilityModal();
            }}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <View style={styles.form_container}>
                <CustomFormInput
                  typeInput={'USER_NAME'}
                  handleChange={handleChange('userName')}
                  handleBlur={handleBlur('userName')}
                  placeholder={'Enter your name'}
                  inputMode={'text'}
                  value={values.userName}
                  error={errors.userName}
                  withSuccesIcon={true}
                />

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
                />

                <CustomFormInput
                  typeInput={'PASSWORD'}
                  handleChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                  placeholder={'Enter your password'}
                  inputMode={'text'}
                  value={values.password}
                  error={errors.password}
                  withSuccesIcon={true}
                  withVisibilityButton
                />

                <CustomFormInput
                  typeInput={'PASSWORD'}
                  handleChange={handleChange('password_confirmation')}
                  handleBlur={handleBlur('password_confirmation')}
                  placeholder={'Confirm your password'}
                  inputMode={'text'}
                  value={values.password_confirmation}
                  error={errors.password_confirmation}
                  withSuccesIcon={true}
                  withVisibilityButton
                  containerStyles={{ marginBottom: 0 }}
                />

                <View style={styles.checkbox_container}>
                  <CheckBox
                    containerStyle={styles.checkbox}
                    checkedColor="green"
                    checked={checkboxStatus}
                    onPress={() => setCheckboxStatus(!checkboxStatus)}
                  />
                  <Text style={styles.checkbox_label}>
                    {`I agree to the Ezy Mart `}
                    <Text style={styles.checkbox_hyperlink}>
                      Terms of Service
                    </Text>
                    {` and \n `}
                    <Text style={styles.checkbox_hyperlink}>
                      Privacy Policy
                    </Text>
                  </Text>
                </View>

                <TouchableOpacity
                  disabled={!checkboxStatus || !isValid}
                  onPress={handleSubmit}
                  style={styles.sign_up_button_container}>
                  <Text style={styles.sign_up_button_text}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.already_have_account_container}>
                  <Text style={styles.sign_up_button_aside_text}>
                    Already have an account yet?
                  </Text>
                  <TouchableOpacity onPress={goBack}>
                    <Text style={styles.sigh_up_button_title}>Log in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>

          <CustomModal
            isVisible={isModalVisible}
            close={goBackHandle}
            text="You was succesfully registered!"
            description="Once again you login successfully into MedSync app"
            textClose="Login"
          />
        </View>
      </KeyboardAwareScrollView>
    </KeyboardDismissWrapper>
  );
};

export default SignUp;
