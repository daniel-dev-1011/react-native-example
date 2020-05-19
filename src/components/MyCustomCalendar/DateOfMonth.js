/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {schedulePushNotification, pushNotification} from '../../notifications/notifications'

export default function DateOfMonth(props) {
  const data = props.data
  const month = props.month
  const year = props.year
  const lastDayofLastMonth = props.lastDayofLastMonth
  const firstDay = props.firstDay
  const lastDay = props.lastDay
  const chosenDate = props.chosenDate
  const firstRender = props.firstRender
  let page = month.month
  let temp = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
  const [array, setArray] = useState(temp)
  const [, updateState] = useState();
  const forceUpdate = () => { updateState({}) }

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

  const onPageSelected = e => {
    console.log('page: ', page)
    console.log('pos: ' + e.nativeEvent.position)
    if (page < e.nativeEvent.position) {
      if (month.month !== 12) {
        props.setNextMonth(month.month)
      } else {
        props.setYear(year + 1)
        props.setNextMonth(0)
      }
      props.setNextData(month.month + 1, year)
    } else if (page > e.nativeEvent.position) {
      if (month.month !== 1) {
        props.setPreviousMonth(month.month)
      } else {
        props.setYear(year - 1)
        props.setPreviousMonth(13)
      }
      props.setPreviousData(month.month - 1, year)
    }
  }

  onPageScroll = e => {
    if (lastVisible < e.nativeEvent.position) {
      props.setNextMonth(page)
      props.setNextData(++page, year)
    } else if (lastVisible > e.nativeEvent.position) {
      props.setPreviousMonth(page)
      props.setPreviousData(--page, year)
    }
    lastVisible = e.nativeEvent.position
  }

  return (
    <ViewPager style={props.containerBody} initialPage={page} pageMargin={20} 
    onPageSelected={(e) => onPageSelected(e)} >

      {firstRender && addDaysOfPrevMonth()}
      {firstRender && addDaysOfNextMonth()}
      {array.map((item) => {
        return (
          <View style={props.containerBody} key={item}>
          {data.map((item, i) => {
            updateIsChosen(item)
            return (
              <TouchableOpacity style={[props.date,
                item.isChosen ? styles.chosenDate : null,
                props.checkIfCurrentDate(item.index, month.month, year) ? styles.currentDate : null]} 
                key={i}
                onPress={() => {
                  schedulePushNotification()
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
      })}
    </ViewPager>
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