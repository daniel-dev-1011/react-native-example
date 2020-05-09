/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipeRightAction = ({ dragX, onPress }) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp', //'clamp' is prevent output value from exceeding output range
  });

  return (
    <TouchableOpacity style={styles.buttonDelete} onPress={onPress}>
      <View>
        <Animated.Text style={[styles.textDelete, { transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

function ItemTodo(props) {
  return (
    <Swipeable
    renderRightActions={(progress, dragX) => (
      <SwipeRightAction dragX={dragX} onPress={() => props.onDeleteToDo(props.itemTodo.id)}/>
    )}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.itemTodo.data.title}</Text>
      </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#FFF',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
  },
  buttonDelete: {
    backgroundColor: "#FF2D00",
    marginVertical: 8,
    marginStart: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  textDelete: {
    color: '#FFF',
    fontSize: 18,
  },
})

export default ItemTodo