/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import LoginFormView from '../View/loginFormView';
import {isEmailValid, isAtleast6Chars, isMatchPasswordRule, isStringEmpty} from '../../../utils/StringUtils';
import {isNetworkConnection} from '../../../utils/StateUtils';
//Using for Multi-Language
import {setI18nConfig, translate, setI18nConfigure} from '../../../translations/translationConfig';
import { connect } from 'react-redux';

class LoginFormViewController extends Component {
  state = {
    textLogin: '',
    textPassword: '',
    currentLang: 'en',
    textErrorEmail: '',
    textErrorPassword: '',
    iconVisibility: 'visibility-off',
    securePass: true
  }

  componentDidMount = () => {
    if (this.props.newLang) {
      this.setState({currentLang: this.props.newLang})
      setI18nConfig()
    }
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (nextProps.email !== this.props.email) {
      this.setState({
        textLogin: nextProps.email,
        textPassword: nextProps.password,
      })
    } else if (nextProps.newLang) {
      this.setState({currentLang: nextProps.newLang})
      setI18nConfig()
    }
  }

  moveFocusToPassword = () => {
    return !!(!this.state.show && this.state.textLogin !== '')
  }

  validatePassword = (textPassword) => {
    this.setState({ textPassword: textPassword })
    if (isStringEmpty(textPassword)) {
      this.setState({ textErrorPassword: translate('field_must_not_empty') })
    } else if (!isAtleast6Chars(textPassword)) {
      this.setState({ textErrorPassword: translate('length_more_than_6') })
    } else if (!isMatchPasswordRule(textPassword)) {
      this.setState({ textErrorPassword: translate('lack_rule_password') })
    } else this.setState({ textErrorPassword: "" })
  }

  validateEmail = (textLogin) => {
    this.setState({ textLogin: textLogin })
    if (isStringEmpty(textLogin)) {
      this.setState({ textErrorEmail: translate('field_must_not_empty') })
    } else if (!isEmailValid(textLogin)) {
      this.setState({ textErrorEmail: translate('email_not_valid') })
    } else {
      this.setState({ textErrorEmail: '' })
    }
  }

  togglePasswordVisibility = () => {
    this.setState({
      securePass: !this.state.securePass,
      iconVisibility: this.state.securePass ? 'visibility' : 'visibility-off'
    })
  }

  shouldAllowLogin = async () => {
    const connection = await isNetworkConnection();
    if (this.state.show || 
      (this.state.textPassword === '')) {
      alert('Please correct username/password!')
    } else if (!connection.isConnected) {
      alert(translate('no_internet'))
    } else {
      this.props.onSubmitted(this.state.textLogin, this.state.textPassword);
    }
  }

  render() {
    setI18nConfigure(this.state.currentLang)
    return(
      <LoginFormView
      showHideErrorEmail={this.showHideErrorEmail}
      textLogin={this.state.textLogin}
      textPassword={this.state.textPassword}
      textErrorEmail={this.state.textErrorEmail}
      textErrorPassword={this.state.textErrorPassword}
      showHideErrorPassword={this.showHideErrorPassword}
      shouldShowPass={this.state.securePass}
      iconVisibility={this.state.iconVisibility}
      togglePasswordVisibility={this.togglePasswordVisibility}
      shouldAllowLogin={this.shouldAllowLogin}
      validateEmail={this.validateEmail}
      validatePassword={this.validatePassword}
      moveFocusToPassword={this.moveFocusToPassword}
      email={translate('email')}
      password={translate('password')}
      login={translate('login')}
      />
    )
  }
}

const mapStateToProps = (state = {}) => {
  if (state.addCurrentUser) {
    return {
      email: state.userName,
      password: state.passWord,
    }
  } else if (state.changeLanguage) {
    return {
      newLang: state.changeLanguage.lang,
    }
  } else return {}  
}

export default connect(mapStateToProps)(LoginFormViewController)