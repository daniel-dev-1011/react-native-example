/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore';
import ToDoView from './ToDoView';

class ToDoViewController extends Component {
  constructor(props) {
    super(props)
    this.ref = firestore().collection('todos');
    this.state = {
      shouldShow: false,
      data: []
    }
  }

  componentDidMount = () => {
    this.onToDoListener()
  }

  toggleModal = () => {
    this.setState({ shouldShow: !this.state.shouldShow })
  }

  addToDo = async (title) => {
    await this.ref.add({
      title: title,
      complete: false,
    });
  }

  onToDoListener = () => {
    this.ref.onSnapshot(querySnapshot => {
      let temp = []
      querySnapshot.forEach(documentSnapshot => {
        temp.push({
          id: documentSnapshot.id,
          data: documentSnapshot.data(),
        })
      });
      this.setState({ data: temp })
    })
  }

  getTodos = () => {
    let temp = []
    this.ref.get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          temp.push(documentSnapshot.data())
        });
        this.setState({ data: temp })
      });
  }

  deleteTodo = (id) => {
    this.ref
    .doc(id)
    .delete()
  }

  render() {
    return (
      <ToDoView
        shouldShow={this.state.shouldShow}
        toggleModal={this.toggleModal}
        addTodo={this.addToDo}
        todos={this.state.data}
        onToDoListener={this.onToDoListener}
        deleteTodo={this.deleteTodo}
      />
    )
  }
}

export default ToDoViewController