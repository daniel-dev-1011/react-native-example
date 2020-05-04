/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import { LOGIN_SUCCESS } from '../../redux/action/index';

function MyProfile(props) {

  return(
    <View style={styles.container}> 
      <Image style={styles.image}
      source={{uri: props.imageUrl}}/>
      <Text style={styles.name}>{props.name}</Text>
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

export default connect(mapStateToProps) (MyProfile)

