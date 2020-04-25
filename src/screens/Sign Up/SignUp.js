/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getUserInfo } from '../../utils/DataUtils';
import * as Progress from 'react-native-progress';
import Modal from 'react-native-modal';
import store from '../../redux/store/reduxStore';
import { addUserInfo } from '../../redux/action/index';
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor(props) {
        super(props);
        const {navigation} = props
        this.state = {
            fullName: '',
            email: '',
            password: '',
            isVisible: false,
            navigation: navigation,
            userInfo: store.getState(),
        }
    }

    // componentDidMount = () => this._setDataForEmailField()

    toggleModal = () => { this.setState({isVisible: !this.state.isVisible}) };

    _setDataForEmailField = () => {
        getUserInfo().then((value) => {
            this.setState({
                email: value.username,
                password: value.password,
            })
        }).catch((error) => {
            console.log('There has been a problem when get data from async: ' + error.message);
        })
    }

    showModal = () => {
        return(
            <Modal isVisible={this.state.isVisible}>
                <View style={styles.containerModal}>
                    <Progress.Circle style={{marginEnd: 20}} size={40} borderWidth={3} color={'#363636'} indeterminate={true} />
                    <Text style={styles.signUpText}>Please wait ...</Text>
                </View>
            </Modal> 
        )
    }

    placeSubmitHandler = () => {
        if(this.state.email.trim() === '' || this.state.password.trim() === '') {
          return;
        }
        this.props.add(this.state.email, this.state.password);
    }

    _saveUserInfoToReduxStore = () => {
        store.dispatch(
            addUserInfo(this.state.email, this.state.password)
          );
    }

    navigateLoginScreen = () => {
        this.state.navigation.navigate('Login', {
            username: this.state.email,
            password: this.state.password,
          })
    }

    _setTiming = (duration) => {
        setTimeout(this.toggleModal, duration);
        setTimeout(this.navigateLoginScreen, duration);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.fullnameContainer}>
                    <Icon name="person-add" size={25} color='#aaa' />
                    <TextInput style={styles.inputs}
                        placeholder='Username'
                        underlineColorAndroid='transparent'
                        onChangeText={(fullName) => this.setState({fullName})} 
                        />
                </View>

                <View style={styles.emailContainer}>
                    <Icon name='email' size={25} color='#aaa' />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.passwordContainer}>
                    <Icon name='lock' size={25} color='#aaa' />
                    <TextInput style={styles.inputs}
                        secureTextEntry
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => { 
                    this.placeSubmitHandler(),
                    this.toggleModal(),
                    this._setTiming(3000)}}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableHighlight>

                {this.showModal()}
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    add: (username, password) => dispatch(addUserInfo(username, password))
  });

export default connect(null, mapDispatchToProps) (SignUp)

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#00b5ec',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerModal: {
        backgroundColor: '#FFF',
        flexDirection: "row",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDismiss: {
        height: 50,
        backgroundColor: '#363636',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        padding: 10,
    },
    fullnameContainer: {
        borderRadius: 30,
        borderColor: '#FFF',
        backgroundColor: '#FFF',
        width: 300, 
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingStart: 12,
    },
    emailContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width: 300, 
        height: 50,
        marginBottom:20,
        paddingStart: 12,
        flexDirection: 'row',
        alignItems:'center'
    },
    passwordContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width: 300, 
        height: 50,
        marginBottom:20,
        paddingStart: 12,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        fontSize: 16,
        flex:1,
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    signupButton: {
        backgroundColor: "#FF4DFF",
    },
    signUpText: {
        color: '#363636',
    },
});