/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, StatusBar, KeyboardAvoidingView, Platform} from 'react-native';
import {saveUserInfo, getUserInfo} from '../../utils/DataUtils';
import LoginForm from './loginForm';
import {isNetworkConnection} from '../../utils/StateUtils';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';
import { login, loginSucces, loginFail, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../../redux/action/index';
import { connect } from 'react-redux';
import store from '../../redux/store/reduxStore';
import { convertErrorCode } from '../../utils/ErrorUtils';
import SplashScreen from 'react-native-splash-screen';
import { StackActions } from '@react-navigation/native';
import MyStatusBar from '../../components/MyStatusBar';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isRender: false,
    };
    this.checkIfUserIsExist()
  }

  checkIfUserIsExist = async () => {
    var user = await getUserInfo();
    if (typeof user !== 'undefined') {
      this.setState({isRender: false})
      this._navigateToMainScreen()
    } else { 
      this.setState({isRender: true})
    }
    SplashScreen.hide();
  }

  componentDidUpdate = () => {
    switch (this.props.state) {
      case LOGIN_SUCCESS: {
        this._saveUserInfo();
        this._navigateToMainScreen();
        break;
      }
      case LOGIN_FAIL: {
        alert(convertErrorCode(this.props.errorCode))
        break;
      }
      default:
        break;
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
    if (this.state.isRender) {
      return (
      <KeyboardAvoidingView
        behavior={Platform.Os == "ios" ? "padding" : "height"}
        style={styles.container} >
        <View>
          <MyStatusBar backgroundColor='#FFF' barStyle='dark-content'/>
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
              this._startLoginSession(username, password)}}/>
            <View style={styles.containerSignUp}>
              <Text style={styles.signUp}>Not a member ?  </Text>
              <Text
              style={styles.forgotPassword}
              onPress={() => this.props.navigation.navigate('Sign Up')}>Sign Up Now.</Text>
            </View>
          </View>
        </View>
        {this.showModal(this.props.isLoading)}
      </KeyboardAvoidingView>
    );
    } else return null;
  }

_saveUserInfo = () => {
  var userInfo = {
    username: this.props.userName, 
    password: this.props.passWord,
  };
  saveUserInfo(userInfo);
}

_navigateToMainScreen = () => {
  this.props.navigation.dispatch(
    StackActions.replace('MaterialTopTab')
  );
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
  switch (state.state) {
    case LOGIN_SUCCESS:
      return {
        state: state.state,
        isLoading: state.isLoading,
        name: state.name
      } 
    case LOGIN_FAIL: 
      return {
        state: state.state,
        isLoading: state.isLoading,
        errorCode: state.errorCode,
      }
    case LOGIN:
      return {
        userName: state.userName,
        passWord: state.passWord,
        state: state.state,
        isLoading: true,
      }
    default:
      return {}
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
    fontFamily: 'DancingScriptOT',
  },
  formContainer: {
    marginTop: 30,
    color: 'red',
  },
  forgotPassword: {
    fontSize: 20,
    color: '#87CEFA',
    textAlign: 'center',
    fontFamily: 'DancingScriptOT',
    textDecorationLine: 'underline',
  },
  signUp: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'DancingScriptOT',
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