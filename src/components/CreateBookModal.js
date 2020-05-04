/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import { addBook } from '../redux/action/index';
import { useDispatch } from 'react-redux';

function CreateBookModal(props) {
  const [isVisible, setVisible] = useState(props.visible)
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const dispatchActionAddBook = () => {
    if (title !== '' && price !== '') {
      dispatch(addBook(title, price, true))
      onToggleModal()
    } else {
      alert('Title/Price cannot be empty !')
    }
  }

  const onToggleModal = () => {
    setVisible(false)
    props.onToggleModal(false)
  }

  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible])

  return(
    <Modal isVisible={isVisible}>
      <View style={styles.container}>

        <View style={styles.bookTitleInput}>
          <Icon name='email' size={25} color='#aaa' />
          <TextInput style={styles.inputs}
            onChangeText={(title) => setTitle(title)}
            placeholder="Book Title"
            underlineColorAndroid='transparent' />
        </View>

        <View style={styles.bookPriceContainer}>
          <Icon name='lock' size={25} color='#aaa' />
          <TextInput style={styles.inputs}
            keyboardType='numeric'
            placeholder="Book Price"
            onChangeText={(price) => setPrice(price)}
            underlineColorAndroid='transparent' />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => dispatchActionAddBook()}>
            <Icon style={{marginEnd: 8}} name='check' size={25} color='#FFF' />
            <Text style={{color: "#FFF"}}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => onToggleModal()}>
            <Icon style={{marginEnd: 8}} name='close' size={25} color='#FFF' />
            <Text style={{color: "#FFF"}}>Cancel</Text>
          </TouchableOpacity>
        </View>
        

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
    paddingTop: 16,
  },
  textInputTitle: {
    flex: 1,
    fontSize: 16,
  },
  bookTitleInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width: 300, 
    height: 50,
    marginBottom:20,
    paddingStart: 12,
    flexDirection: 'row',
    alignItems:'center'
  },
  bookPriceContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width: 300, 
    height: 50,
    marginBottom:20,
    paddingStart: 12,
    flexDirection: 'row',
    alignItems:'center'
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    fontSize: 16,
    flex:1,
  },
  buttonContainer: {
    height:45,
    width: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: '#2980b9',
    marginHorizontal: 8,
  },  
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
})

export default CreateBookModal