/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, {useState, useEffect} from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

function UpdateBookModal(props) {
  const [isVisible, setVisible] = useState(props.visible);

  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible]);

  const togglemModal = () => {
    setVisible(!isVisible)
  }

  return (
      <Modal style={styles.containerModal} isVisible={isVisible}>
      <View style={styles.containerInput}>

        <View style={styles.containerSection}>
          <Icon name="person-add" size={25} color='#aaa' />
          <TextInput style={styles.inputs}
            placeholder='Username'
            underlineColorAndroid='transparent'
          />
        </View>

        <View style={styles.containerSection}>
          <Icon name="email" size={25} color='#aaa' />
          <TextInput style={styles.inputs}
            placeholder='Username'
            underlineColorAndroid='transparent' 
          />
        </View>

      </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  containerInput: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 16,
  },
  containerSection: {
    flexDirection: 'row',
    marginVertical: 8,
    paddingEnd: 12,
  },
  inputs: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginStart: 16,
  }
})

export default UpdateBookModal