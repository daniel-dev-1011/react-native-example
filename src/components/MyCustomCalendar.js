/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const W = Dimensions.get('window').width;
const W_Date = (W - 16) / 7;
const date = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
var d = new Date()
const months = [
  {
    month: 1,
    name: 'January',
  },
  {
    month: 2,
    name: 'February',
  },
  {
    month: 3,
    name: 'March',
  },
  {
    month: 4,
    name: 'April',
  },
  {
    month: 5,
    name: 'May',
  },
  {
    month: 6,
    name: 'June',
  },
  {
    month: 7,
    name: 'July',
  },
  {
    month: 8,
    name: 'August',
  },
  {
    month: 9,
    name: 'September',
  },
  {
    month: 10,
    name: 'October',
  },
  {
    month: 11,
    name: 'November',
  },
  {
    month: 12,
    name: 'December',
  },
]

const getDatesInMonth = (month, year) => {
  const days = []
  for (let index = 1; index <= new Date(year, month, 0).getDate(); index++) {
    days.push({index, month, year, isChosen: false})
  }
  return days;
}

const getFirstDay = (month, year) => {
  var firstDay = new Date(year, month - 1, 1).getDay()
  return firstDay === 0 ? 7 : firstDay
}

const getNameFromMonth = (number) => {
  const temp = months.find(item => item.month === (number + 1))
  return temp;
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

const paddingStart = (number) => {
  if (number <= 2) {
    return 3
  } else if (2 < number <= 4) {
    return 8
  } else {
    return 6
  }
}

const checkIfChosenOrNot = (item, chosenDates) => {
  var index = chosenDates.findIndex(x => (x.index === item.index && x.month === item.month && x.year === item.year));
  return chosenDates[index]
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
  const firstDay = getFirstDay(month.month, year) - 1;
  const marginStart = (firstDay) * (W_Date) + paddingStart(firstDay)
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <View style={styles.containerHeader}>
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} 
          onPress={() => { 
            if (month.month !== 1) {
              setMonth(getPreviousMonth((month.month)))
              setData(getDatesInMonth(month.month - 1, year))
            } else {
              setYear(year - 1)
              setMonth(getNextMonth(11))
            }
          }}>
            <Icon name='chevron-left' size={22} />
            <Text style={styles.textHeading}>Previous</Text>
          </TouchableOpacity>

          <Text style={styles.textMonth}>{month.name} - {year}</Text>

          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => { 
            if (month.month !== 12) {
              setMonth(getNextMonth(month.month))
              setData(getDatesInMonth(month.month + 1, year))
            } else {
              setYear(year + 1)
              setMonth(getNextMonth(0))
            }
          }}>
            <Text style={styles.textHeading}>Next</Text>
            <Icon name='chevron-right' size={22} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerDate}>
          {date.map((item) => {
            return (
              <Text style={styles.dateTitle}>{item}</Text>
            )
          })}
        </View>

        <View style={styles.containerBody}>
          {data.map((item) => {
            var object = checkIfChosenOrNot(item, chosenDate)
            if (typeof object !== 'undefined') {
              var index = data.findIndex(x => x.index === object.index)
              data[index].isChosen = true
            }
            return (
              <TouchableOpacity style={[{marginStart: item.index === 1 ? marginStart : 1, marginEnd: 1}, styles.date,
                item.isChosen ? styles.chosenDate : null,
                checkIfCurrentDate(item.index, month.month, year) ? styles.currentDate : null]} 
                onPress={() => { 
                  if (!item.isChosen) {
                    item.isChosen = true
                    chosenDate.push(item)
                  } else {
                    item.isChosen = false
                    chosenDate.splice(checkIndex(item, chosenDate), 1) //object already exist
                  }
                  setChosenDate(chosenDate)
                  forceUpdate()
                }}>
                <Text style={{textAlign: 'center'}}>{item.index}</Text>
              </TouchableOpacity>
            )})}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  textMonth: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  containerDate: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  containerBody: {
    marginTop: 16,
    alignItems : 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  currentDate: {
    backgroundColor: '#A6FF00',
    borderRadius: 4,
    paddingVertical: 4,
  },
  date: {
    width: W_Date, 
    height: 30, 
    marginBottom: 30,
    justifyContent: "center"
  },
  dateTitle: {
    fontWeight: 'bold',
    width: W_Date + 1, 
    textAlign: 'center',
  },
  chosenDate: {
    backgroundColor: '#DDD',
    borderRadius: 4,
    paddingVertical: 4,
  },
})

export default MyCustomCalendar