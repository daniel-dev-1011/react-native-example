/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getUserInfo } from '../../storage/DataUtils';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        const {route}  = props
        const {item} = route.params
        this.state = {
            // fullName: item.name,
            fullName: '',
            email: '',
            password: '',
        }
    }

    componentDidMount = () => this._setDataForEmailField()

    _setDataForEmailField = () => {
        getUserInfo().then((value) => {
            this.setState({
                email: value.username,
                password: value.password,
            })
        })
    }

    _onClickListener = () => {
        Alert.alert('Error', `Username is ${this.state.fullName}`, [
        { 
            text: "OK"
        }
        ],
        { cancelable: true }
    );
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

                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => {this._onClickListener()}}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#00b5ec',
        justifyContent: 'center',
        alignItems: 'center',
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
        color: 'white',
    },
});