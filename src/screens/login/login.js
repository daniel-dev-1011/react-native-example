/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, StatusBar, KeyboardAvoidingView, Platform} from 'react-native';
import {saveUserInfo} from '../../utils/DataUtils';
import LoginForm from './loginForm';
import {isNetworkConnection} from '../../utils/StateUtils';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';
import { login, loginSucces, loginFail } from '../../redux/action/index';
import { connect } from 'react-redux';
import store from '../../redux/store/reduxStore';
import { convertErrorCode } from '../../utils/ErrorUtils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      username: '',
      password: '',
    };
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (this.props.name !== nextProps.name) {
      this._navigateToMainScreen();
    } else if (nextProps.errorCode) {
      alert(convertErrorCode(nextProps.errorCode))
    }
  }

  _startLoginSession = async (username, password) => {
    const connection = await isNetworkConnection()
    if (connection.isConnected) {
      store.dispatch(login(username, password, true))
    } else {
      alert(convertErrorCode('0000')) // 0000 is 'no internet connection' code
    }
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
              this._startLoginSession(username, password)
            }}/>
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
        {this.showModal(this.props.isLoading)}
      </KeyboardAvoidingView>
    );
  }

  toggleModal = () => {
    this.setState({isVisible: !this.state.isVisible})
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

showModal = (isVisible) => {
  return(
      <Modal isVisible={isVisible}>
        <View style={styles.modalContainer}>
          <Progress.Circle borderWidth={4} color={'#FFF'} indeterminate={true} />
        </View>
      </Modal> 
  )}
}

// const mapDispatchToProps = (dispatch) => ({
//   login: (username, password) => dispatch(login(username, password))
// });

const mapStateToProps = (state = {}) => {
  if (state.isLoading) {
    return {
      isLoading: state.isLoading,
    }
  } else if (state.errorCode) {
    return {
      isLoading: state.isLoading,
      errorCode: state.errorCode,
    }
  } else {
    return {
      isLoading: state.isLoading,
      name: state.name
    }
  }
}

export default connect(mapStateToProps, {login, loginSucces, loginFail}) (Login)

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