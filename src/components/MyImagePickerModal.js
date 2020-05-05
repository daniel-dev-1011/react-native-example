/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';

function MyImagePickerModal(props) {
  const [isVisible, setVisible] = useState(props.shouldShow)
  
  useEffect(() => {
    setVisible(props.shouldShow)
  }, [props.shouldShow])

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}> 
        <Text style={{fontSize: 28}}>Choose Images</Text>

        <View style={styles.containerOptions}>
          <TouchableOpacity style={styles.buttonCamera} onPress={props.onChooseCamera}>
            <Text style={styles.text}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCamera} onPress={props.onChooseGallery}>
            <Text style={styles.text}>Gallery</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => props.onToggle(false)}>
          <Text style={{fontSize: 18}}>Cancel</Text>
        </TouchableOpacity>

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  containerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'DancingScriptOT',
  },
  buttonCamera: {
    width: 120, 
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    marginHorizontal: 16,
    backgroundColor: '#424242',
  },
})

export default MyImagePickerModal

