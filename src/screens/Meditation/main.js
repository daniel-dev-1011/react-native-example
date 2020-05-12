/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Background from '../../components/MyMeditationBackground';
import MySearchBar from '../../components/MySearchBar';
import MyListCardMeditation from '../../components/MyListCardMeditation';
const W = Dimensions.get('window').width;

function Meditation(props) {
  return(
    <View style={styles.container}> 
      <Background onBackPressed={() => props.navigation.pop()}/>
      <MySearchBar style={styles.containerSearch}/>
      <MyListCardMeditation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerSearch: {
    marginTop: -110,
    marginBottom: 30,
    width: W/2 + 16,
  },
})

export default Meditation