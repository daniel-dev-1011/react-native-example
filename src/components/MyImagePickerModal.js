/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';

const options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function MyImagePickerModal(props) {
  const [isVisible, setVisible] = useState(props.shouldShow)
  
  useEffect(() => {
    setVisible(props.shouldShow)
  }, [props.shouldShow])

  const showCamera = () => {
    props.onToggle(false)
    setTimeout(() => {
      ImagePicker.launchCamera(options, (response) => {
        if (response.error) {
          alert(response.error)
        }

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          props.onImageChosen(response.uri)
        }
      });
    }, 350);
  }

  const showGallery = () => {
    props.onToggle(false)
    setTimeout(() => {
      ImagePicker.launchImageLibrary(options, (response) => {
        if (response.error) {
          alert(response.error)
        }

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          props.onImageChosen(response.uri)
        }
      });
    }, 350);
  }

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}> 
        <Text style={{fontSize: 28}}>Choose Images</Text>

        <View style={styles.containerOptions}>
          <TouchableOpacity style={styles.buttonCamera} onPress={showCamera}>
            <Text style={styles.text}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCamera} onPress={showGallery}>
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

