/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipeRightAction = ({ dragX, onPress }) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp', //'clamp' is prevent output value from exceeding output range
  });

  return (
    <TouchableOpacity style={styles.buttonDelete} onPress={onPress}>
      <View style={styles.textDelete}>
        <Animated.Text style={[styles.textDelete, { transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

const SwipeLeftAction = ({ dragX, onPress }) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <TouchableOpacity style={styles.buttonEdit} onPress={onPress}>
      <View style={styles.textEdit}>
        <Animated.Text style={[styles.textEdit, { transform: [{ scale }] }]}>
          Edit
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

function ItemRow({bookTitle, price, onDelete}) {
  return(
    <Swipeable
    renderRightActions={(progress, dragX) => (
      <SwipeRightAction dragX={dragX} onPress={() => onDelete(bookTitle)}/>
    )}
    renderLeftActions={(progress, dragX) => (
      <SwipeLeftAction dragX={dragX} onPress={() => alert('Edit')} />
    )}>
    <View style={styles.container}>
      <Text style={styles.textTitle}>{bookTitle}</Text>
      <Text style={styles.textPrice}>{price}</Text>
    </View>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#363636',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 8,
    padding: 16,
  },
  textTitle: {
    flex: 1,
    fontFamily: 'DancingScriptOT',
    color: "#FFF",
    fontSize: 20,
  },
  textPrice: {
    fontSize: 14,
    color: "#FFF",
  },
  buttonDelete: {
    backgroundColor: "#FF2D00",
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  buttonEdit: {
    backgroundColor: "#53FF43",
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  textDelete: {
    fontSize: 20,
    color: '#FFF',
  },
  textEdit: {
    fontSize: 24,
    color: '#363636',
  },
})

export default ItemRow