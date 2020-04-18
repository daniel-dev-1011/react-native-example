/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Contact from '../screens/main/Contact';
import Schedule from '../screens/schedule/schedule';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{indicatorStyle: {backgroundColor: '#000'}}}>
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Schedule" component={Schedule} />
    </Tab.Navigator>
  );
}

export default MyTabs