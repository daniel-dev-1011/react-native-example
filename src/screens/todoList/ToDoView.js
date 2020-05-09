/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, {Component} from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CreateBookModal from '../../components/CreateBookModal';
import ItemTodo from './itemRow';

class ToDoView extends Component {

  render() {
    const {
      shouldShow,
      toggleModal,
      addTodo,
      todos,
      deleteTodo,
    } = this.props

    return (
      <View style={styles.MainContainer}>
        <FlatList style={styles.listItem}
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => 
        <ItemTodo
        onDeleteToDo={(id) => deleteTodo(id)}
        itemTodo={item} />}
        />
        <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={toggleModal} 
        style={styles.TouchableOpacityStyle} >
          <Image source={require('../../images/plus-symbol-black-png-3-original.png')}
            style={styles.FloatingButtonStyle} />
        </TouchableOpacity>
        <CreateBookModal 
        onSubmittedToDo={(title) => addTodo(title)}
        onToggleModal={toggleModal}
        visible={shouldShow}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  listItem: {
    flex: 1, 
    paddingVertical: 8, 
    paddingHorizontal: 16,
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor : '#F5F5F5'
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  item: {
    padding: 10,
    height: 44,
  },
});

export default ToDoView
