/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function DateOfMonth(props) {
  const data = props.data
  const month = props.month
  const year = props.year
  const chosenDate = props.chosenDate
  const marginStart = props.marginStart
  const [, updateState] = useState();
  const forceUpdate = () => { updateState({}) };
  const updateIsChosen = (item) => {
    var date = props.checkIfChosenOrNot(item, chosenDate)
    if (date) {
      var index = data.findIndex(x => x.index === date)
      data[index].isChosen = true
    }
  }

  return (
    <View style={props.containerBody}>
      {data.map((item) => {
        updateIsChosen(item)
        return (
          <TouchableOpacity style={[{marginStart: item.index === 1 ? marginStart : 1, marginEnd: 1}, props.date,
            item.isChosen ? styles.chosenDate : null,
            props.checkIfCurrentDate(item.index, month.month, year) ? styles.currentDate : null]} 
            onPress={() => { 
              if (!item.isChosen) {
                item.isChosen = true
                chosenDate.push(item)
              } else {
                item.isChosen = false
                chosenDate.splice(props.checkIndex(item, chosenDate), 1) //remove exist object
              }
              props.setChosenDate(chosenDate)
              forceUpdate()
            }}>
            <Text style={{textAlign: 'center'}}>{item.index}</Text>
          </TouchableOpacity>
        )})}
    </View>
  )
}

const styles = StyleSheet.create({
  chosenDate: {
    backgroundColor: '#DDD',
    borderRadius: 4,
    paddingVertical: 4,
  },
  currentDate: {
    backgroundColor: '#A6FF00',
    borderRadius: 4,
    paddingVertical: 4,
  },
  textDate: {
    textAlign: 'center',
  }
})