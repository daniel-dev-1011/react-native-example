/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import { connect } from 'react-redux';
import {addUserInfo} from '../../redux/action/index';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { containerTopMargin : 10 }
    this.state = {textLogin: ''};
    this.state = {textPassword: ''};
    this.state = {show: false};
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (nextProps.email !== this.props.email) {
      this.setState({
        textLogin: nextProps.email,
        textPassword: nextProps.password,
      })
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

  validateEmail = email => {
    return this.props.showOrHideError(email);
  };

  _navigateToMainScreen = () => {
    this.props.onSubmitted(this.state.textLogin, this.state.textPassword);
  }

  _shouldAllowLogin = () => {
    if (this.state.show || 
      (this.state.textPassword === '' || typeof this.state.textPassword === 'undefined')) {
      alert('Please correct username/password!')
    } else {
      this._navigateToMainScreen();
    }
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
                    if (this.state.show) {
                      this._toggleCancel()
                    }
                  } else if (!this.validateEmail(textLogin)) {
                    if (!this.state.show) {
                      this._toggleCancel()
                    }
                  } else if (this.state.show) {
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
            ref={(input)=>this.secondTextInput = input} />
          </View>

          {this._showHideErrorPassword()}
          
          <TouchableOpacity style={styles.buttonLogin}
          onPress={this._shouldAllowLogin}>
            <Text style={styles.btnTextLogin}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return {
    email: state.userName,
    password: state.passWord,
  }
}

export default connect(mapStateToProps, null) (LoginForm)

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
