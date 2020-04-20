/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import {saveUserInfo} from '../../utils/DataUtils';
import store from '../../redux/store/reduxStore';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { containerTopMargin : 10 }
    this.state = {textLogin: ''};
    this.state = {textPassword: ''};
    this.state = {textError: ''};
    this.state = {show: false};
  }

  componentDidMount = () => { this._getUserInfoStateFromRedux() }

  _getUserInfoStateFromRedux = () => {
    store.subscribe(() => {
      this.setState({
        textLogin: store.getState().userName,
        textPassword: store.getState().passWord,
      })
    });
  }

  _checkIfLoginInfoValid = () => {
      if (this.state.textLogin === store.getState().userName &&
      this.state.textPassword === store.getState().passWord) {
        this._navigateToMainScreen()
      } else {
        alert('Wrong username or password!')
      }
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      return (
        <Text style={styles.errorText}>This email is invalid</Text>
      );
    } else if (this.state.textLogin == '') {
      return (
        <Text style={styles.errorText}>This field must not empty</Text>
      );
    } else return null;
  };

  _showHideErrorPassword = () => {
    if (this.state.textPassword == '') {
      return (
        <Text style={styles.emptyText}>This field must not empty</Text>
      );
    } else return null;
  }

  _toggleCancel = () => {
    this.setState({
        show: !this.state.show
    });
  }

  _onPressButton = () => {
    alert('username: ' + this.state.textLogin + '\n' + 'password: ' + this.state.textPassword)
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  _navigateToMainScreen = () => {
    this.props.nav.navigate('MaterialTopTab');
    // Save username and password to async
    var userInfo = {
      username: this.state.textLogin, 
      password: this.state.textPassword
    };
    saveUserInfo(userInfo);
  }
  
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.usernameSection}>
              <Kohana
                style={styles.inputEmail}
                iconClass={MaterialsIcon}
                iconName={'person'}
                labelStyle={{ color: '#363636' }}
                inputStyle={{ color: '#363636' }}
                inputPadding={10}
                returnKeyType='next'
                placeholder='Username or Email'
                keyboardType='email-address'
                onChangeText={(textLogin) => this.setState({textLogin}, () => {
                  if (textLogin == '') {
                    if (this.state.show == true) {
                      this._toggleCancel()
                    }
                  } else if (!this.validateEmail(textLogin)) {
                    if (this.state.show == false) {
                      this._toggleCancel()
                    }
                  } else if (this.state.show == true) {
                    this._toggleCancel()
                  }
                })}
                value={this.state.textLogin}
                onSubmitEditing={()=> {
                  if (this.state.show == false && this.state.textLogin != '') {
                    this.secondTextInput.focus()
                  }
                }} />
          </View>

          {this.ShowHideComponent()}

          <View style={styles.passwordSection}>
            <Kohana
            style={styles.inputPass}
            iconClass={MaterialsIcon}
            iconName={'lock'}
            labelStyle={{ color: '#363636' }}
            inputStyle={{ color: '#363636' }}
            inputPadding={10}
            secureTextEntry
            placeholder='Password'
            onChangeText={(textPassword) => this.setState({textPassword})}
            value={this.state.textPassword}
            ref={(input)=>this.secondTextInput = input}
            onSubmitEditing={()=>this._onPressButton()} />
          </View>

          {this._showHideErrorPassword()}
          
          <TouchableOpacity style={styles.buttonLogin}
          onPress={this._checkIfLoginInfoValid}>
            <Text style={styles.btnTextLogin}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  usernameSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  passwordSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  container: {
      padding: 20,
      marginBottom: 20,
      overflow: 'hidden',
  },
  containerUserName: {
    marginBottom: 15,
  },
  inputEmail: {
    height: 50,
    backgroundColor: '#DCDCDC',
    color: '#363636',
    fontSize: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#fff'
  },
  errorText: {
    fontSize: 12,
    color: '#FF0000',
    textAlign: 'left',
    marginStart: 10,
    justifyContent: 'flex-start',
  },
  inputPass: {
      height: 50,
      backgroundColor: '#DCDCDC',
      color: '#363636',
      fontSize: 15,
      borderRadius: 10,
      overflow: 'hidden',
      borderColor: '#fff'
  },
  buttonLogin: {
      backgroundColor: '#2980b9',
      paddingVertical: 25,
      borderRadius: 10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 12, 
  },
  buttonForgot: {
      backgroundColor: '#2980b9',
      paddingVertical: 15,
      height: 50,
      marginLeft: 10,
      borderRadius: 10,
      flex: 1
  },
  btnTextLogin: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700',
      fontSize: 15
  },
  btnTextForgot: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700',
      fontSize: 13
  },
  buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15, 
      marginBottom: 10,
      marginTop: 38,
  },
  emptyText: {
    fontSize: 12,
    color: '#FF0000',
    textAlign: 'left',
    marginStart: 10,
    justifyContent: 'flex-start',
  },
});
