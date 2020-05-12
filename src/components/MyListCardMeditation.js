/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import {StyleSheet, Dimensions, View, Text, TouchableWithoutFeedback, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const W = Dimensions.get('window').width;

const data = [
  {
    id: 1,
    title: 'Session 01',
  }, 
  {
    id: 2,
    title: 'Session 02',
  },
  {
    id: 3,
    title: 'Session 03',
  }, 
  {
    id: 4,
    title: 'Session 04',
  },  
  {
    id: 5,
    title: 'Session 05',
  },  
  {
    id: 6,
    title: 'Session 06',
  }, 
]

function MyListCardMeditation(style) {
  return (
    <View style={[styles.container, style]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollView}>
          {data.map((item) => {
          return (
            <TouchableWithoutFeedback>
              <View style={[styles.containerCard, styles.cardShadow, item.id % 2 === 1 && {marginRight: 16}, 
                {marginBottom: (item.id > data.length - 2) ? 0 : 16}]}>
                <View style={[styles.containerPlay, {backgroundColor: item.id === 1 ? '#817DC0' : '#FFF'}]}>
                  <Image source={item.id === 1 ? require('../images/btn-play-white.png') : require('../images/btn-play-purple.png')}/>
                </View>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableWithoutFeedback>
          )})}
        </View>
        <Text style={styles.text}>Training Courses</Text>
        <View style={[styles.lessons, styles.cardShadow]}>
          <Image style={styles.profile} source={require('../images/meditation-course.png')}/>
          <View style={{flexDirection: 'column', justifyContent: 'space-evenly', flex: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 14, letterSpacing: 0.13}}>Basics 1</Text>
            <Text style={{fontSize: 12, letterSpacing: 0.13}}>{`Start training depend on your\npractice`}</Text>
          </View>
          <Icon style={{marginEnd: 8}} name='lock-outline' size={24} color='#686C83'/>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollView: {
    flex: 1,
    flexWrap: 'wrap', 
    flexDirection: 'row',
    marginBottom: 20,
  },
  containerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: (W - 48) / 2,
    height: 71,
    borderRadius: 12,
    padding: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    letterSpacing: 0.11,
    fontWeight: 'bold'
  },
  containerPlay: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#817DC0',
    borderWidth: 0.5,
    borderColor: '#817DC0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 17, 
    marginStart: 16, 
    letterSpacing: 0.16, 
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lessons: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 12,
    padding: 8,
    height: 89,
    marginBottom: 8,
  },
  profile: {
    resizeMode: 'contain',
    marginEnd: 16,
  },
})

export default MyListCardMeditation