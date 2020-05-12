/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import {StyleSheet, Dimensions, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const W = Dimensions.get('window').width;

const background = () => {
  return(
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../images/background_exercise.png')}/>
      <View style={styles.containerHeading}>
        <View style={styles.menu}>
          <Icon style={styles.iconMenu} name='menu' color='#FFF' size={26}/>
        </View>
        <Text style={styles.heading}>{`Good Morning \nDaniel`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: W,
    height: 330,
    backgroundColor: '#EFCFBA',
    paddingTop: 5,
  },
  containerHeading: {
    marginTop: 50,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  containerSearch: {
    height: 46,
    flexDirection: 'row',
    borderRadius: 40,
    backgroundColor: '#FFF',
    paddingHorizontal: 14,
    alignItems: 'center'
  },
  textSearch: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#777',
    backgroundColor: '#FFF'
  },
  menu: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    right: 20,
    top: -10,
    backgroundColor: '#F2BEA1',
  },
  iconMenu: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  backgroundImage: {
    position: 'absolute',
    top: 15,
    marginLeft: -70,
  },
  inputs:{
    marginLeft: 16,
    fontSize: 16,
    flex: 1,
  },
})

export default background