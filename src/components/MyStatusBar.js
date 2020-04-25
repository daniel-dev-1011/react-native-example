/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import { View } from 'react-native';

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    statusBar: {
      height: STATUS_BAR_HEIGHT,
    },
  })

export default MyStatusBar