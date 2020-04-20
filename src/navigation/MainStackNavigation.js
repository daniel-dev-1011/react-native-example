/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login/login';
import SignUp from '../screens/Sign Up/SignUp';
import MaterialTopTab from './MaterialTopTabNavigation';

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Login'
      screenOptions={{
        gestureEnabled: true,
        headerShown: false
        }}>
        <Stack.Screen
            name='Login'
            component={Login}
            options={{ title: 'Home Screen'}}  
        />
        <Stack.Screen
          name='Sign Up'
          component={SignUp}
          options={{ title: 'Sign Up Screen' }}
        />
        <Stack.Screen
          name='MaterialTopTab'
          component={MaterialTopTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator