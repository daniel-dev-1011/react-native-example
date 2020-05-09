/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {saveUserInfo, getUserInfo, getImageResource, getCurrentLang, getLocalize} from '../../utils/DataUtils';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';
import { login, loginSucces, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, changeLanguage } from '../../redux/action/index';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { StackActions } from '@react-navigation/native';
import MyStatusBar from '../../components/MyStatusBar';
import MyModal from '../../components/MyModal';
import LinearGradient from "react-native-linear-gradient";
import MyLanguageOptions from '../../components/MyLanguageOptions';
import LoginFormViewController from './ViewController/loginFormViewController';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isRender: false,
      shouldShow: false,
      currentLang: 'ENGLISH',
      currentLanguage: 'en',
    };
    this.checkCurrentLang()
    this.checkIfUserIsExist()
  }

  checkCurrentLang = async () => {
    let lang = await getCurrentLang()
    if (typeof lang !== 'undefined') {
      this.setState({
        currentLang: lang,
        currentLanguage: getLocalize(lang)
      })
      this.props.changeLanguage(this.state.currentLanguage)
    }
  }

  checkIfUserIsExist = async () => {
    var user = await getUserInfo();
    if (typeof user !== 'undefined') {
      this.setState({isRender: false})
      this.dispatchDataUser(user)
      this._navigateToMainScreen()
    } else {
      this.setState({isRender: true})
    }
    SplashScreen.hide();
  }

  dispatchDataUser = (user) => {
    this.props.loginSucces(user.full_name, user.avatar.original_url, false, user)
  }

  componentDidUpdate = () => {
    switch (this.props.state) {
      case LOGIN_SUCCESS: {
        if (this.state.isRender) {
          this._saveUserInfo();
        }
        this._navigateToMainScreen();
        break;
      }
      default:
        break;
    }
  }

  _startLoginSession = async (username, password) => {
    this.props.login(username, password, true)
  }

  render() {
    if (this.state.isRender) {
      return (
        <LinearGradient
        style={styles.container}
        colors={[
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FCFFFF",
          "#CEFFFB"
        ]}>
        <View>
          <MyStatusBar backgroundColor='#FFF' barStyle='dark-content'/>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../images/github_icon.jpg')} />
            <Text style={styles.title}>Welcome to My First React Native App</Text>
          </View>
          <View style={styles.formContainer}>
            
            <LoginFormViewController
            onSubmitted = {(username, password) => { this._startLoginSession(username, password)}}/>

            <View style={styles.containerSignUp}>
              <Text style={styles.signUp}>Not a member ?  </Text>
              <Text
              style={styles.forgotPassword}
              onPress={() => this.props.navigation.navigate('Sign Up')}>Sign Up Now.</Text>
            </View>

            {this.state.shouldShow && <MyLanguageOptions 
              currentLang={this.state.currentLang}
              setLang={(newLang) => { 
                this.setState({shouldShow: !this.state.shouldShow}), 
                this.setState({currentLang: newLang})
              }}/>
            }

            <TouchableWithoutFeedback onPress={() => this.setState({shouldShow: !this.state.shouldShow})}>
              <View style={styles.containerLang}>
              <Text style={styles.textLang}>{this.state.currentLang}</Text>
                <Image style={styles.image} source={getImageResource(this.state.currentLang)}/>
              </View>
            </TouchableWithoutFeedback>
            
          </View>
        </View>
        {this.showModal(this.props.isLoading)}
        <MyModal visible={typeof this.props.errorCode !== 'undefined'} errorCode={(this.props.errorCode)}/>
      </LinearGradient>
    );
    } else return null;
  }

_saveUserInfo = () => {
  saveUserInfo(this.props.user);
}

_navigateToMainScreen = () => {
  this.props.navigation.dispatch(
    StackActions.replace('Drawer')
  );
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

const mapStateToProps = (state = {}) => {
  if (state.addCurrentUser == null) {
    if (state.logOut !== null) {
      return {
        state: state.logOut.state,
      }
    } else return {}
  } else {
    switch (state.addCurrentUser.state) {
    case LOGIN_SUCCESS:
      return {
        state: state.addCurrentUser.state,
        isLoading: state.addCurrentUser.isLoading,
        user: state.addCurrentUser.user,
      } 
    case LOGIN_FAIL:
      return {
        state: state.addCurrentUser.state,
        isLoading: state.addCurrentUser.isLoading,
        errorCode: state.addCurrentUser.errorCode,
      }
    case LOGIN:
      return {
        userName: state.addCurrentUser.userName,
        passWord: state.addCurrentUser.passWord,
        state: state.addCurrentUser.state,
        isLoading: true,
      }
    default:
      return {}
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, isLoading) => dispatch(login(email, password, isLoading)),
    loginSucces: (name, imageUrl, isLoading, user) => dispatch(loginSucces(name, imageUrl, isLoading, user)),
    changeLanguage: (newLang) => dispatch(changeLanguage(newLang)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)

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
    marginBottom: 30,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLang: {
    width: 231,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 8,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textLang: {
    flex: 1, 
    textAlign: 'center', 
    color: '#777', 
    fontSize: 14, 
    marginEnd: -24,
    textTransform: 'uppercase'
  },
})