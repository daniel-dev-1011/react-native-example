/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Exercise from '../screens/Exercise/main';
import Meditation from '../screens/Meditation/main';

const Stack = createStackNavigator()

function WorkOutMainStack() {
  return (
    <Stack.Navigator 
    initialRouteName='All Exercises'
    screenOptions={{
      gestureEnabled: true,
      headerShown: false
      }}>
      <Stack.Screen
        name='All Exercises'
        component={Exercise} 
      />
      <Stack.Screen
        name='Meditation'
        component={Meditation} 
      />
      </Stack.Navigator>
  )
}

export default WorkOutMainStack