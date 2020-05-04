/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { convertErrorCode } from '../utils/ErrorUtils';

export default function MyModal(props) {
  const [isVisibility, setVisibility] = useState(props.visible)

  useEffect(() => {
    setVisibility(props.visible)
  }, [props.visible]);

  return(
    <Modal isVisible={isVisibility}>
      <View style={styles.container}>
        <Text style={styles.text}>{convertErrorCode(props.errorCode)}</Text>
        <View>
          <Button buttonStyle={styles.button} type= "solid" title="Confirm" onPress={() => setVisibility(false)} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    borderRadius: 5,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  text: {
    fontSize: 18,
  },
})