/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const mySearchBar = ({style}) => {
  return (
    <View style={[styles.containerSearch, style]}>
      <Icon name='search' size={24} color='#777' />
      <TextInput 
        style={styles.inputs}
        underlineColorAndroid='transparent'
        placeholder='Search'
        selectionColor='#777' />
    </View>
  )
}

const styles = StyleSheet.create({
  containerSearch: {
    height: 46,
    flexDirection: 'row',
    borderRadius: 40,
    backgroundColor: '#FFF',
    paddingHorizontal: 14,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  inputs:{
    flex: 1,
    fontSize: 16,
    paddingStart: 15,
    overflow: 'hidden',
    textAlignVertical: 'bottom',
    backgroundColor: 'transparent',
    color: '#777',
    textAlignVertical: 'center'
  },
})

export default mySearchBar
