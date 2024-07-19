import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
} from "~assets/images/icons/IconsSvg";
import { CustomFormInput, TouchableOpacityButton } from "~components";
import { ThemeColors } from "~assets";
import styles from "./styles";
import useSignIn from "./hooks/useSignIn";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("*email is required")
    .email("*the email is incorrect"),
  password: yup
    .string()
    .required("*password is required")
    .min(8, "*password must contain at least 8 characters"),
});

const SignIn = () => {
  const { goToSignUp } = useSignIn();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: ThemeColors.white }}>
      <ScrollView>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View
              style={{
                paddingHorizontal: 30,
                paddingTop: 60,
              }}
            >
              <CustomFormInput
                typeInput={"EMAIL"}
                handleChange={handleChange("email")}
                handleBlur={handleBlur("email")}
                placeholder={"Enter your email"}
                inputMode={"email"}
                value={values}
                error={errors}
                withSuccesIcon={true}
              />

              <CustomFormInput
                typeInput={"PASSWORD"}
                handleChange={handleChange("password")}
                handleBlur={handleBlur("password")}
                placeholder={"Enter your password"}
                inputMode={"text"}
                value={values}
                error={errors}
                withSuccesIcon={true}
                withVisibilityButton
              />

              <TouchableOpacity style={{ marginTop: 20 }}>
                <Text style={styles.forgot_password_text}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                disabled={!isValid}
                onPress={handleSubmit}
                style={styles.submit_button_container}
              >
                <Text style={styles.submit_button_text}>Login</Text>
              </TouchableOpacity>

              <View style={styles.sign_up_button_container}>
                <Text
                  style={styles.sign_up_button_aside_text}
                >{`Don't have an account?`}</Text>
                <TouchableOpacity onPress={goToSignUp}>
                  <Text style={styles.sigh_up_button_title}>Sign Up</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.line_divider_container}>
                <Text style={styles.line_divider_text}>OR</Text>
              </View>

              <TouchableOpacityButton
                icon={<AppleIcon />}
                text={"Continue with Apple"}
              />

              <TouchableOpacityButton
                icon={
                  <View style={styles.facebook_icon_container}>
                    <FacebookIcon
                      width={26}
                      height={26}
                      style={{ position: "absolute", bottom: 0, right: 0 }}
                    />
                  </View>
                }
                text={"Continue with Facebook"}
              />

              <TouchableOpacityButton
                icon={<GoogleIcon width={26} height={22} />}
                text={"Continue with Google"}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
