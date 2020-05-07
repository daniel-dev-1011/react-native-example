/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import MyStatusBar from '../components/MyStatusBar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Contact from '../screens/main/Contact';
import Schedule from '../screens/schedule/schedule';
import { View } from 'react-native';
import MyTabBar from '../components/MyTabBar';
import { connect } from 'react-redux';
import { LOGIN_SUCCESS } from '../redux/action/index';
import MyProfile from '../screens/MyProfile/MyProfile';
import ViewController from '../screens/todoList/ViewController';

const Tab = createMaterialTopTabNavigator()

class MyTabs extends Component {
  constructor(props) {
    super(props);
  }
  
  showTabNavigator = () => {
    if (!this.props.shouldShowProfile) {
      return(
        <Tab.Navigator
          tabBarOptions={{indicatorStyle: {backgroundColor: '#363636'}}}>
          <Tab.Screen name="Contact" component={Contact} />
          <Tab.Screen name="To Do List" component={ViewController} />
        </Tab.Navigator>
      )
    } else {
      return (
        <MyProfile />
      )
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MyStatusBar backgroundColor='#FFF' barStyle='dark-content'/>
        <MyTabBar
          navigation={this.props.navigation}
          imageUrl={this.props.imageUrl}
          name={this.props.name}/>
          {this.showTabNavigator()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.addCurrentUser !== null) {
    if (state.addCurrentUser.state === LOGIN_SUCCESS) {
      return {
        name: state.addCurrentUser.name,
        imageUrl: state.addCurrentUser.imageUrl,
      }
    }
  }
  return {};
}

export default connect(mapStateToProps) (MyTabs)