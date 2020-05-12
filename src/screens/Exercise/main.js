/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import {StyleSheet, View, StatusBar, Dimensions} from 'react-native';
import Background from '../../components/MyExerciseBackground';
import ListCard from '../../components/MyListCard';
import MySearchBar from '../../components/MySearchBar';
const W = Dimensions.get('window').width;

function main(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='transparent'/>
      <Background />
      <MySearchBar style={styles.containerSearch}/>
      <ListCard
        onNavigationListener = {() => props.navigation.navigate('Meditation')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerSearch: {
    marginTop: -135,
    width: W - 48,
    marginHorizontal: 16,
    alignSelf: 'center',
    marginBottom: 50,
  },
})

export default main


