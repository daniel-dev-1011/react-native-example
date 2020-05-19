/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, {useState} from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import {months} from '../../utils/Constants';
import DateOfMonth from './DateOfMonth';
import HeaderCalendar from './HeaderCalendar';
import TitleDays from './TitleDays';

const W = Dimensions.get('window').width
const W_Date = (W - 16) / 7;
const H = Dimensions.get('window').height
var d = new Date()

const getDatesInMonth = (month, year) => {
  let days = []
  for (let index = 1; index <= new Date(year, month, 0).getDate(); index++) {
    days.push({index, month, year, isChosen: false})
  }
  return days;
}

const getFirstDay = (month, year) => {
  var firstDay = new Date(year, month - 1, 1).getDay()
  return firstDay === 0 ? 7 : firstDay
}

const getLastDay = (month, year) => {
  return new Date(year, month, 0).getDay()
}

const getLastDayofLastMonth = (month, year) => {
  return new Date(year, month - 1, 0).getDate()
}

const getNameFromMonth = (number) => {
  return months.find(item => item.month === (number + 1))
}

const getPreviousMonth = number => {
  if (number !== 1) {
    return months.find(item => item.month === (number - 1))
  } else {
    return months.find(item => item.month === (1))
  }
}

const getCurrentYear = () => {
  return d.getFullYear();
}

const getNextMonth = number => {
  return months.find(item => item.month === (number + 1));
}

const getCurrentDate = () => {
  return d.getDate();
}

const getCurrentMonth = () => {
  return d.getMonth();
}

const checkIfCurrentDate = (date, month, year) => {
  return ((date === getCurrentDate()) && 
    (month === getCurrentMonth() + 1) && 
    (year === getCurrentYear())
  )
}

const checkIfChosenOrNot = (item, chosenDates) => {
  var index = chosenDates.findIndex(x => (x.index === item.index && x.month === item.month && x.year === item.year));
  return typeof chosenDates[index] !== 'undefined' ? chosenDates[index].index : undefined
}

const checkIndex = (item, chosenDates) => {
  return chosenDates.findIndex(x => (x.index === item.index && 
    x.month === item.month && x.year === item.year));
}

function MyCustomCalendar() {
  const [month, setMonth] = useState(getNameFromMonth(getCurrentMonth()))
  const [year, setYear] = useState(getCurrentYear())
  const [data, setData] = useState(getDatesInMonth(month.month, year))
  const [chosenDate, setChosenDate] = useState([])
  const [firstRender, setFirstRender] = useState(true)
  const firstDay = getFirstDay(month.month, year) - 1;
  const lastDay = getLastDay(month.month, year);
  const lastDayofLastMonth = getLastDayofLastMonth(month.month, year);

  return (
    <View style={styles.container}>
      <HeaderCalendar 
      month={month}
      year={year}
      setYear={(year) => { setYear(year), setFirstRender(true) }}
      setPreviousData={(month, year) => setData(getDatesInMonth(month, year))}
      setNextData={(month, year) => setData(getDatesInMonth(month, year))}
      setNextMonth={(month) => { setMonth(getNextMonth(month)), setFirstRender(true) } }
      setPreviousMonth={(month) => { setMonth(getPreviousMonth((month))), setFirstRender(true) }}
      />

      <TitleDays dateTitle={styles.dateTitle}/>

      <DateOfMonth 
      firstRender={firstRender}
      data={data}
      chosenDate={chosenDate}
      firstDay={firstDay}
      lastDay={lastDay}
      lastDayofLastMonth={lastDayofLastMonth}
      month={month}
      year={year}
      date={styles.date}
      containerBody={styles.containerBody}

      setNextMonth={(month) => { setMonth(getNextMonth(month)), setFirstRender(true) } }
      setNextData={(month, year) => setData(getDatesInMonth(month, year))}
      setPreviousMonth={(month) => { setMonth(getPreviousMonth((month))), setFirstRender(true) }}
      setPreviousData={(month, year) => setData(getDatesInMonth(month, year))}
      setYear={(year) => { setYear(year), setFirstRender(true) }}
      
      
      setFirstRender={() => setFirstRender(false)}
      checkIndex={(item, chosenDate) => checkIndex(item, chosenDate)}
      setChosenDate={(chosenDate) => setChosenDate(chosenDate)}
      checkIfCurrentDate={(date, month, year) => checkIfCurrentDate(date, month, year)}
      checkIfChosenOrNot={(item, chosenDate) => checkIfChosenOrNot(item, chosenDate)}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  containerBody: {
    height: H / 2,
    marginTop: 16,
    alignItems : 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateTitle: {
    fontWeight: 'bold',
    width: W_Date + 1, 
    textAlign: 'center',
  },
  date: {
    width: W_Date, 
    height: 30, 
    marginEnd: 1,
    marginBottom: 30,
    justifyContent: "center"
  },
})

export default MyCustomCalendar