/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {StyleSheet, Text, Image, Platform} from 'react-native';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const myTabBar = ({imageUrl, userName, navigation}) => {
  return (
    <View style={styles.containerTabbar}>
      <Button style={styles.buttonDrawer}
      type="clear"
      icon={<Icon name="bars" size={20} />} 
      onPress={() => navigation.toggleDrawer()}></Button>
      <Text style={styles.text}>{userName}</Text>
      <Image style={styles.image} 
      source={{uri: imageUrl}}></Image>
    </View>
  )  
}
  
  const styles = StyleSheet.create({
    containerTabbar: {
        height: Platform.OS === 'ios' ? 54 : 44,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#FFF',
        shadowColor: "#00000029",
        elevation: 2,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderColor: "#00000029",
        borderWidth: 1,
    },
    buttonDrawer: {
      flex: 1,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      marginRight: 10,
    },
    text: {
      flex: 1,
      color: '#363636',
      fontSize: 16,
      alignSelf: 'center',
    },  
    image: {
        height: 32,
        width: 32,
        borderRadius: 16,
        alignSelf: 'center',
    },
  })
  
  export default myTabBar