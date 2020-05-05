/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { LOGIN_SUCCESS } from '../../redux/action/index';
import ImagePicker from 'react-native-image-picker';
import {changeProfile} from '../../redux/action/index';
import MyImagePickerModal from '../../components/MyImagePickerModal';

const options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function MyProfile(props) {
  const [filePath, setFilePath] = useState(props.imageUrl)
  const [username] = useState(props.name)
  const [shouldShow, setShouldShow] = useState(false)

  const showCamera = () => {
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
          props.changeProfile(response.uri)
          setFilePath(response.uri)
        }
      });
    }, 350);
  }

  const showGallery = () => {
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
          props.changeProfile(response.uri)
          setFilePath(response.uri)
        }
      });
    }, 350);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setShouldShow(true)}>
        <Image 
          style={styles.image}
          source={{uri: filePath}}/>
      </TouchableWithoutFeedback> 
      <Text style={styles.name}>{username}</Text>
      <MyImagePickerModal
      onChooseCamera={() => { setShouldShow(false), showCamera() }}
      onChooseGallery={() => { setShouldShow(false), showGallery() }}
      onToggle={(shouldShow) => setShouldShow(shouldShow)}
      shouldShow={shouldShow} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    marginTop: 30,
  },
})

const mapStateToProps = (state = {}) => {
  if (state.addCurrentUser !== null) {
    switch (state.addCurrentUser.state) {
      case LOGIN_SUCCESS:
        return {
          name: state.addCurrentUser.name,
          imageUrl: state.addCurrentUser.user.avatar.original_url,
        }
      default:
        return {}
    }
  } else {
    return {}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeProfile: (uri) => dispatch(changeProfile(uri))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyProfile)

