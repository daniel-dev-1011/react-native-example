/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import MyStatusBar from '../components/MyStatusBar';
import {StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Contact from '../screens/main/Contact';
import Schedule from '../screens/schedule/schedule';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <View style={styles.view}>
    <MyStatusBar backgroundColor='#FFF' barStyle='dark-content'/>
    <Tab.Navigator
      tabBarOptions={{indicatorStyle: {backgroundColor: '#363636'}}}>
    <Tab.Screen name="Contact" component={Contact} />
    <Tab.Screen name="Schedule" component={Schedule} />
    </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})

export default MyTabs