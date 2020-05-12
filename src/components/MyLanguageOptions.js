/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React from 'react';
import {StyleSheet, View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import {lang} from '../utils/Constants';
import {connect} from 'react-redux';
import {changeLanguage} from '../redux/action/index';
import {getLocalize} from '../utils/DataUtils';
import {saveCurrentLang} from '../utils/DataUtils';

const itemRow = (item, props) => {
  if (item.name !== props.currentLang) {
    return (
      <TouchableOpacity onPress={() => { 
          props.setLang(item.name), 
          props.changeLanguage(getLocalize(item.name)),
          saveCurrentLang(item.name) 
        }}>
        <View style={styles.containerItem}>
          <Text style={styles.text}>{item.name}</Text>
          <Image style={styles.image} source={item.url}/>
        </View>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity>
        <View style={styles.containerLastItem}>
          <Text style={styles.text}>{item.name}</Text>
          <Image style={styles.image} source={item.url}/>
        </View>
      </TouchableOpacity>
    )
  }
}

const moveCurrentLangToLast = (currentLang) => {
  var index = lang.findIndex(item => item.name === currentLang);
  lang.push(lang.splice(index, 1)[0]);
}

function MyLangguageOptions(props) {
  moveCurrentLangToLast(props.currentLang)
  return (
    <View style={styles.container}>
      <FlatList
      keyboardShouldPersistTaps='always'
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      data={lang}
      renderItem={({item}) => itemRow(item, props)}
      keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: 231, 
    height: 312,
    borderColor: '#00000033',
    borderWidth: 0.3,
    elevation: 3,
    backgroundColor: '#FFF',
    borderRadius: 18,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  containerLastItem: {
    width: 231,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    borderRadius: 18,
    paddingHorizontal: 8,
    borderColor: "#00000033",
    borderWidth: 0.3,
  }, 
  text: {
    flex: 1, 
    fontSize: 14, 
    color: "#777", 
    textAlign: 'center', 
    marginEnd: -24,
    textTransform: 'uppercase',
  },
  image: {
    width: 24, 
    height: 24, 
    resizeMode: 'contain',
  },
  containerItem: {
    justifyContent: 'center', 
    alignContent: 'center', 
    flex: 1, 
    marginBottom: 12, 
    marginTop: 4, 
    padding: 8, 
    flexDirection: 'row',
  },
})

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: (newLang) => dispatch(changeLanguage(newLang)),
  }
}

export default connect(null, mapDispatchToProps) (MyLangguageOptions)