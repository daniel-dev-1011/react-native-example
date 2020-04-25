/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { Component, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import Modal from 'react-native-modal';

function showModal() {
  const [isVisible, setVisible] = useState(false);

  var toggleModal = () => { setVisible(!isVisible) };

  return (
      <View style={styles.container}>
        <Button title="Show modal" onPress={toggleModal}/>
        <Modal isVisible={isVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal}/>
          </View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   justifyContent: 'center',
   alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default showModal
