/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HeaderCalendar(props) {
  const month = props.month
  const year = props.year

  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity style={styles.titleChangeMonth} 
        onPress={() => { 
        if (month.month !== 1) {
          props.setPreviousMonth(month.month)
          props.setPreviousData(month.month - 1, year)
        } else {
          props.setYear(year - 1)
          props.setPreviousMonth(13)
        }}}>
        <Icon name='chevron-left' size={22} />
        <Text style={styles.textHeading}>Previous</Text>
      </TouchableOpacity>

      <Text style={styles.textMonth}>{month.name} - {year}</Text>

      <TouchableOpacity style={styles.titleChangeMonth}
        onPress={() => { 
        if (month.month !== 12) {
          props.setNextMonth(month.month)
          props.setNextData(month.month + 1, year)
        } else {
          props.setYear(year + 1)
          props.setNextMonth(0)
        }}}>
        <Text style={styles.textHeading}>Next</Text>
        <Icon name='chevron-right' size={22} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleChangeMonth: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textMonth: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textHeading: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
})