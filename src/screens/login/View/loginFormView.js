/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class LoginFormView extends Component {
  render() {
    const {
      shouldAllowLogin,
      validateEmail,
      validatePassword,
      textLogin,
      textPassword,
      textErrorEmail,
      textErrorPassword,
      moveFocusToPassword,
      email,
      password,
      login,
      shouldShowPass,
      iconVisibility,
      togglePasswordVisibility
    } = this.props

    return (
      <KeyboardAvoidingView 
      behavior={Platform.Os == "ios" ? "padding" : "height"}>
      <View style={styles.container}>
        <View style={styles.usernameSection}> 
          {textLogin !== '' && <Text style={styles.textLabel}>{email}</Text>}
          <TextInput 
            selectionColor='#000'
            style={styles.inputEmail}
            placeholder={email}
            returnKeyType='next'
            keyboardType='email-address'
            onChangeText={email => validateEmail(email)}
            value={textLogin}
            onSubmitEditing={() => moveFocusToPassword() ? this.secondTextInput.focus() : null}>
          </TextInput>
        </View>

        {textErrorEmail !== '' && <Text style={styles.errorText}>{textErrorEmail}</Text>}

        <View style={styles.passwordSection}>
          {textPassword !== '' && <Text style={styles.textLabel}>{password}</Text>}
          <TextInput 
          style={styles.inputPass}
          selectionColor='#000'
          secureTextEntry={shouldShowPass}
          placeholder={password}
          onChangeText={(textPassword) => validatePassword(textPassword)}
          value={textPassword}
          ref={(input) => this.secondTextInput = input} />
          <TouchableWithoutFeedback onPress={togglePasswordVisibility}> 
            <Icon style={{position: 'absolute', right: 12,}} name={iconVisibility} size={24} color={'#777'}/>
          </TouchableWithoutFeedback>
        </View>

        {textErrorPassword !== '' && <Text style={styles.errorText}>{textErrorPassword}</Text>}
          
        <TouchableOpacity style={styles.buttonLogin}
          onPress={shouldAllowLogin}>
          <Text style={styles.btnTextLogin}>{login}</Text>
        </TouchableOpacity> 
      </View>
      </KeyboardAvoidingView>
    );
  }
}

export default (LoginFormView)

const styles = StyleSheet.create ({
  usernameSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    flex: 1,
    height: 56,
    fontSize: 16,
    paddingStart: 15,
    marginBottom: 4,
    overflow: 'hidden',
    borderBottomWidth: 1,
    textAlignVertical: 'bottom',
    backgroundColor: 'transparent',
  },
  errorText: {
    fontSize: 12,
    color: '#FF0000',
    textAlign: 'left',
    marginStart: 10,
    justifyContent: 'flex-start',
  },
  inputPass: {
    flex: 1,
    height: 56,
    fontSize: 16,
    paddingStart: 15,
    paddingEnd: 32,
    marginBottom: 4,
    overflow: 'hidden',
    borderBottomWidth: 1,
    textAlignVertical: 'bottom'
  },
  buttonLogin: {
    backgroundColor: '#363636',
    height: 36,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 20, 
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
      fontSize: 15,
      textTransform: 'uppercase'
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
  textLabel: {
    position: 'absolute', 
    left: 15, 
    top: -2, 
    color: '#777'
  },
});
