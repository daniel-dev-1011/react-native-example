/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import {StyleSheet, Dimensions, View, Text, Image, Platform, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const W = Dimensions.get('window').width;

const background = (props) => {
  return(
    <SafeAreaView style={{backgroundColor: '#C7B8F5'}}>
      <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../images/meditation-bg.png')}/>
      <TouchableOpacity onPress={() => props.onBackPressed()}>
        <Icon style={{top: Platform.OS === 'ios' ? 8 : 16, left: 16}} name='chevron-left' size={26} color='#8463e9'/>
      </TouchableOpacity>
      <View style={styles.containerHeading}>
        <Text style={styles.heading}>Meditation</Text>
        <Text style={styles.duration}>3 - 10 MIN Course</Text>
        <Text style={styles.description}>{`Live happier and healthier by learning the \nfundamentals of meditation and \nmindfulness`}</Text>
      </View>
        <Image style={styles.menu} source={require('../images/meditation-woman.png')}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: W,
    height: 310,
    backgroundColor: '#C7B8F5',
  },
  containerHeading: {
    marginTop: 0,
    padding: 20,
    flexDirection: 'column'
  },
  heading: {
    fontSize: 34,
    marginBottom: 14,
    fontFamily: 'DancingScript-Regular_Bold'
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
    top: 5,
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