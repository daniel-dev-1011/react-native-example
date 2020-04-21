/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, StatusBar, KeyboardAvoidingView, Platform} from 'react-native';
import {saveUserInfo} from '../../utils/DataUtils';
import LoginForm from './loginForm';
import {BASE_URL} from '../../utils/Constants';
import {isNetworkConnection} from '../../utils/StateUtils';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({isVisible: !this.state.isVisible})
  }

  render() {
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
            <LoginForm
            showOrHideError = {(username) => this._validateEmail(username)}
            onSubmitted = {(username, password) => {
              this.getUser(username, password)
              this.toggleModal()}
            }/>
            <View style={styles.containerSignUp}>
              <Text style={styles.signUp}>Not a member ? </Text>
              <Text
              style={styles.forgotPassword}
              onPress={() => this.props.navigation.navigate('Sign Up')}>
              Sign Up Now.
              </Text>
            </View>
          </View>
        </View>
        {this.showModal(this.state.isVisible)}
      </KeyboardAvoidingView>
    );
  }

_navigateToMainScreen = (username, password) => {
  this.props.navigation.navigate('MaterialTopTab');
  var userInfo = {
    username, 
    password,
  };
  saveUserInfo(userInfo);
}

_validateEmail = email => {
  var pattern = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
};

getUser = async (email, password) => {
  const isConnected =  await isNetworkConnection();
  if (isConnected) {
    return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    })
    .then((response) => response.json())
    .then((json) => {    
      if (json.success) {
        this._navigateToMainScreen(email, password)
      } else {
        alert('Wrong username or password!')
      }
      this.state.isVisible ? this.toggleModal() : null
    })
    .catch((error) => {
      console.error(error);
      this.state.isVisible ? this.toggleModal() : null
      alert('Error while logging in, please try again later')
    });
  } else {
    this.state.isVisible ? this.toggleModal() : null
    alert('No internet connection. Please try again.')
  }
}

showModal = (isVisible) => {
  return(
      <Modal isVisible={isVisible}>
        <View style={styles.modalContainer}>
          <Progress.Circle borderWidth={4} color={'#FFF'} indeterminate={true} />
        </View>
      </Modal> 
  )}
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
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})