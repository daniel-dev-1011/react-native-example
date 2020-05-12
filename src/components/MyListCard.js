/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import {StyleSheet, Dimensions, View, Text, TouchableWithoutFeedback, FlatList} from 'react-native';
import { Image } from 'react-native';
const W = Dimensions.get('window').width;

const data = [
  {
    title: 'Diet Recommendation',
    url: require('../images/diet.jpg')
  },
  {
    title: 'Kegel Exercises',
    url: require('../images/kegel.png')
  },
  {
    title: 'Meditation',
    url: require('../images/meditation.jpg')
  },
  {
    title: 'Yoga',
    url: require('../images/yoga.jpg')
  },
]

const handleNavigation = (props, title) => {
  if (title === 'Meditation') {
    props.onNavigationListener()
  } else {
    alert(title)
  }
}

function listCard(props) {
  return (
    <View style={styles.container2}>
      <FlatList
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback onPress={() => handleNavigation(props, item.title)}>
              <View style={[styles.containerCard, styles.cardShadow, index % 2 === 0 && {marginRight: 16}, {backgroundColor: index === 2 ? '#FAFBFD' : '#FFF'}]}>
                <Image resizeMode='contain' style={styles.image} source={item.url}/>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerFlatList: {
    flex: 1,
  },
  container2: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'transparent'
  },
  container: {
    alignContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'transparent'
  },
  containerCard: {
    width: (W - 48) / 2,
    height: (W / 2),
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
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
    fontSize: 16,
    fontFamily: 'DancingScriptOT'
  },
  image: {
    width: '100%',
    height: '90%',
  }
})

export default listCard