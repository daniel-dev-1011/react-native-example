/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { addBook, addBookSuccess, addBookFail } from '../../redux/action/index';
import { connect, useDispatch } from 'react-redux';

function AddBook(props) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const dispatchActionAddBook = () => {
    dispatch(addBook(title, price, true))
  }

  useEffect(() => {
    if (!props.isLoading) {
      setTitle(''),
      setPrice('')
    }
  }, [props.isLoading]);

  return(
    <View style={styles.container}>
 
      <View style={styles.bookTitleInput}>
        <Icon name='email' size={25} color='#aaa' />
        <TextInput style={styles.inputs}
          onChangeText={(title) => setTitle(title)}
          value={title}
          placeholder="Book Title"
          underlineColorAndroid='transparent' />
      </View>

      <View style={styles.bookPriceContainer}>
        <Icon name='lock' size={25} color='#aaa' />
        <TextInput style={styles.inputs}
          keyboardType='numeric'
          placeholder="Book Price"
          value={price}
          onChangeText={(price) => setPrice(price)}
          underlineColorAndroid='transparent' />
      </View>

      <TouchableHighlight style={styles.buttonContainer} onPress={dispatchActionAddBook}>
        <Text style={{color: "#FFF"}}>Add Book</Text>
      </TouchableHighlight>

    </View>
  )
}

const mapStateToProps = (state = {}) => {
  if (state.addBookReducers) {
    if (state.addBookReducers.status === 'ok') {
      return {
        isLoading: state.addBookReducers.isLoading,
      }
    } else if (state.addBookReducers.isError) {
      alert('Add book failed !')
      return {
        isLoading: state.addBookReducers.isLoading,
      }
    }
  } else {
    return {
      isLoading: false,
    }
  }
}

export default connect(mapStateToProps, {addBookSuccess, addBookFail}) (AddBook)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: '#2980b9',
},
})