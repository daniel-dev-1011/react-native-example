/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {date} from '../../utils/Constants';

export default function TitleDays(props) {
  return (
    <View style={styles.containerDate}>
    {date.map((item, i) => {
      return (
        <Text style={props.dateTitle} key={i}>{item}</Text>
      )
    })}
  </View>
  )
}

const styles = StyleSheet.create({
  containerDate: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
})