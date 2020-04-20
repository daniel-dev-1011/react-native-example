/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import {StyleSheet, View, Image, Text, StatusBar, KeyboardAvoidingView, Platform} from 'react-native';
import LoginForm from './loginForm';

function Login(props) {
  const { navigation } = props;

    return (
      <KeyboardAvoidingView
      behavior={Platform.Os == "ios" ? "padding" : "height"}
      style={styles.container} >
        <View>
          <StatusBar hidden={true} />
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../images/github_icon.jpg')} />
            <Text style={styles.title}>Welcome to My First React Native App</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm nav = {navigation}/>
            <View style={styles.containerSignUp}>
              <Text style={styles.signUp}>Not a member ? </Text>
              <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate('Sign Up')}>
              Sign Up Now.
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 30,
    width: 250,
    marginTop: 20,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DancingScript-regular',
  },
  formContainer: {
    marginTop: 30,
    color: 'red',
  },
  forgotPassword: {
    fontSize: 20,
    color: '#87CEFA',
    textAlign: 'center',
    fontFamily: 'DancingScript-regular',
    textDecorationLine: 'underline',
  },
  signUp: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DancingScript-regular',
    textDecorationLine: 'none',
  },
  containerSignUp: {
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
});

export default Login