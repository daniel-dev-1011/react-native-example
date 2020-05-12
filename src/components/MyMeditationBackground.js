/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import {StyleSheet, Dimensions, View, Text, Image} from 'react-native';
const W = Dimensions.get('window').width;

const background = () => {
  return(
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../images/meditation-bg.png')}/>
      <View style={styles.containerHeading}>
        <Text style={styles.heading}>Meditation</Text>
        <Text style={styles.duration}>3 - 10 MIN Course</Text>
        <Text style={styles.description}>{`Live happier and healthier by learning the \nfundamentals of meditation and \nmindfulness`}</Text>
      </View>
      <Image style={styles.menu} source={require('../images/meditation-woman.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: W,
    height: 330,
    backgroundColor: '#C7B8F5',
  },
  containerHeading: {
    marginTop: 40,
    padding: 20,
    flexDirection: 'column'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  duration: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 18,
    letterSpacing: 0.3,
  },
  description: {
    fontSize: 12,
    fontWeight: 'normal',
    marginBottom: 20,
    letterSpacing: 0,
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
    top: 25,
    right: -90,
    alignSelf: 'flex-end'
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