/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import {StyleSheet, Image} from 'react-native';
import Schedule from '../screens/schedule/schedule';
import WorkOutMainStack from '../navigation/WorkOutMainStack';
import MyCustomCalendar from '../components/MyCustomCalendar';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='All Exercises' inactiveColor='#4A4E64' activeColor='#E68342' barStyle={styles.container}>
      <Tab.Screen name="Today" component={MyCustomCalendar} options={{
        tabBarIcon: ({ focused, color }) => {
          tintColor = focused ? '#E68342' : color
          return (
            <Image source={require('../images/today.png')} style={[{tintColor: tintColor}, styles.image]} />
          )
        },
      }}/>
      <Tab.Screen name="All Exercises" component={WorkOutMainStack} options={{
        tabBarIcon: ({ focused, color }) => {
          tintColor = focused ? '#E68342' : color
          return (
            <Image source={require('../images/exercise-icon.png')} style={{tintColor: tintColor}}/>
          )
        },
      }}/>
      <Tab.Screen name="Setting" component={Schedule} options={{
          tabBarIcon: ({ focused, color }) => {
            tintColor = focused ? '#E68342' : color
            return (
              <Image source={require('../images/setting.png')} style={[{tintColor: tintColor}, styles.image]}/>
            )
          },
      }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    justifyContent: 'space-between'
  },
  containerIcon: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 12, 
    textAlign: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
  },
})

export default MyTabs