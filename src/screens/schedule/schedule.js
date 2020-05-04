/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ItemRow from '../schedule/itemRow';
import { getBook, getBookSuccess, getBookFail } from '../../redux/action/index';
import { fetchAPI, deleteAPI } from './Presenters/fetchAPI';
import { connect } from 'react-redux';
import MyFloatingButton from '../../components/MyFloatingButton';

function ListView(props) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    if (props.data) {
      setData(props.data)
    } else {
      // props.getBook()
    }
  }, [props.data])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => 
        <ItemRow
          onDelete={(title) => deleteAPI(title)}
          bookTitle={item.title}
          price={item.price} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <MyFloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const mapStateToProps = (state = {}) => {
  if (state.getBookReducers) {
    if (state.getBookReducers.data) {
      return {
        data: state.getBookReducers.data,
      }
    }
  } else if (state.addBookReducers) {
    if (state.addBookReducers.status === 'ok') {
      fetchAPI()
    }
  }
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getBook: () => dispatch(getBook())
})

export default connect(mapStateToProps, mapDispatchToProps) (ListView)