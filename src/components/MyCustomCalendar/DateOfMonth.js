/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function DateOfMonth(props) {
  const data = props.data
  const month = props.month
  const year = props.year
  const lastDayofLastMonth = props.lastDayofLastMonth
  const firstDay = props.firstDay
  const lastDay = props.lastDay
  const chosenDate = props.chosenDate
  const firstRender = props.firstRender
  const [, updateState] = useState();
  const forceUpdate = () => { updateState({}) };
  const updateIsChosen = (item) => {
    var date = props.checkIfChosenOrNot(item, chosenDate)
    if (date) {
      var index = data.findIndex(x => (x.index === date && x.month === item.month && x.year === item.year))
      data[index].isChosen = true
    }
  }
  const addDaysOfPrevMonth = () => {
    for (let index = lastDayofLastMonth; index > (lastDayofLastMonth - firstDay); index--) {
      data.unshift({index, month, year, isChosen: false, lastMonth: true})
    }
  }

  const addDaysOfNextMonth = () => {
    if (lastDay !== 0) {
      for (let index = 1; index <= 7 - lastDay; index++) {
        data.push({index, month, year, isChosen: false, lastMonth: true})
      }
    }
    props.setFirstRender()
  }

  return (
    <View style={props.containerBody}>
      {firstRender && addDaysOfPrevMonth()}
      {firstRender && addDaysOfNextMonth()}
      {data.map((item) => {
        updateIsChosen(item)
        return (
          <TouchableOpacity style={[props.date,
            item.isChosen ? styles.chosenDate : null,
            props.checkIfCurrentDate(item.index, month.month, year) ? styles.currentDate : null]} 
            onPress={() => { 
              if (!item.lastMonth) {
                if (!item.isChosen) {
                  item.isChosen = true
                  chosenDate.push(item)
                } else {
                  item.isChosen = false
                  chosenDate.splice(props.checkIndex(item, chosenDate), 1)
                }
                props.setChosenDate(chosenDate)
                forceUpdate()
              }
            }}>
            <Text style={{color: item.lastMonth ? '#BBB' : '#000', textAlign: 'center'}}>{item.index}</Text>
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