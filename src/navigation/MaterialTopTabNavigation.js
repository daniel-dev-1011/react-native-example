/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component } from 'react';
import MyStatusBar from '../components/MyStatusBar';
import {StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Contact from '../screens/main/Contact';
import Schedule from '../screens/schedule/schedule';
import { View } from 'react-native';
import MyTabBar from '../components/MyTabBar';
import { connect } from 'react-redux';
import { loginSucces, LOGIN_SUCCESS } from '../redux/action/index';

const Tab = createMaterialTopTabNavigator()

class MyTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
      <MyStatusBar backgroundColor='#FFF' barStyle='dark-content'/>
      <MyTabBar
      navigation={this.props.navigation}
      imageUrl={this.props.imageUrl}
      userName={this.props.name}/>
      <Tab.Navigator
        tabBarOptions={{indicatorStyle: {backgroundColor: '#363636'}}}>
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Schedule" component={Schedule} />
      </Tab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})

const mapStateToProps = (state = {}) => {
  switch (state.state) {
    case LOGIN_SUCCESS:
      return {
        state: state.state,
        name: state.name,
        imageUrl: state.imageUrl,
      }
    default:
      return {}
  }
}

export default connect(mapStateToProps, {loginSucces}) (MyTabs)