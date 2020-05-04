/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialTopTab from './MaterialTopTabNavigation';
import React from 'react';
import LogOut from '../screens/logout/index';
import MyProfile from '../screens/MyProfile/index';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

function MyDrawer(props) {

  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator initialRouteName="Main Screen">
      <Drawer.Screen name="Main Screen" component={MaterialTopTab} shouldShowProfile={false} />
      <Drawer.Screen name="My Profile" component={MyProfile} navigation={props.navigation}/>
      <Drawer.Screen name="Log Out" component={LogOut} navigation={props.navigation}  />
    </Drawer.Navigator>
    </View>
  );
}

export default MyDrawer