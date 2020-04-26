/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialTopTab from './MaterialTopTabNavigation';
import React from 'react';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main Screen" component={MaterialTopTab} />
      {/* <Drawer.Screen name="Log out" /> */}
    </Drawer.Navigator>
  );
}

export default MyDrawer