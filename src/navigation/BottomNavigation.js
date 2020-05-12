/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import Schedule from '../screens/schedule/schedule';
import Contact from '../screens/main/Contact';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Contact'>
      <Tab.Screen name="Contact" component={Contact} options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';

            return <Icon
              name={iconName} 
              size={size = focused ? 28 : 22} 
              color={color} />
          },
      }} />
      <Tab.Screen name="Schedule" component={Schedule} options={{
        tabBarIcon: ({ focused, color }) => {
          if (!focused) {
            return <IconFeather name='settings' size={22} color={color} />;
          } else {
            return <IconMaterial name='settings' size={28} color={color} />;
          }
        },
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
    return (
        <MyTabs />
    );
  }