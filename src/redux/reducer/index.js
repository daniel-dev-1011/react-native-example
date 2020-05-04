/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {ADD_USER_INFO, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN, LOGOUT} from '../action/index';
import {REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL} from '../action/index'
import {ADD_BOOK, ADD_BOOK_SUCCESS, ADD_BOOK_FAIL} from '../action/index';
import {GET_ALL_BOOKS, GET_ALL_BOOKS_SUCCESS, GET_ALL_BOOKS_FAIL} from '../action/index';
import {DELETE_BOOK, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAIL} from '../action/index';
import { combineReducers } from 'redux';

export const ADD_CURRENT_USER = 'addCurrentUser'

const logOut = (state = {}, action) => {
  if (action.type === LOGOUT) {
    return state = {
      state: LOGOUT,
    }
  } else return null;
}


const registerReducers = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return state = {
        isLoading: action.payload.success,
      }
    }
    case REGISTER_USER_SUCCESS: {
      return state = {
        isLoading: false,
        success: action.payload.success,
      }
    }
    case REGISTER_USER_FAIL: {
      return state = {
        isLoading: false,
        success: action.payload.success,
      }
    }
    default: return null;
  }
}

const deleteBookReducers = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BOOK:
      return state = {}
    case DELETE_BOOK_SUCCESS: {
      return state = {
        status: action.payload.status
      }
    }
    case DELETE_BOOK_FAIL: {
      return state = {}
    }
    default: return null;
  }
}

const getBookReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return state = {}
    case GET_ALL_BOOKS_SUCCESS:
      return state = {
        data: action.payload.data,
      }
    case GET_ALL_BOOKS_FAIL: {}
    default: return null;
  }
}

const addBookReducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return state = {
        isLoading: action.payload.isLoading,
      }
    }
    case ADD_BOOK_SUCCESS: {
      return state = {
        status: action.payload.status,
        isLoading: action.payload.isLoading,
      }
    }
    case ADD_BOOK_FAIL: {
      return state = {
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
      }
    }
    default: return null;
  }
}

const addCurrentUser = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_INFO: {
      return state = {
        userName: action.payload.email,
        passWord: action.payload.password,
      }
    }
    case LOGIN: {
      return state = {
        userName: action.payload.email,
        passWord: action.payload.password,
        isLoading: action.payload.isLoading,
        state: action.type,
      }
    }
    case LOGIN_SUCCESS: {
      return state = {
        state: action.type,
        name: action.payload.name,
        imageUrl: action.payload.imageUrl,
        isLoading: action.payload.isLoading,
        user: action.payload.user,
      }
    }
    case LOGIN_FAIL: {
      return state = {
        state: action.type,
        errorCode: action.payload.errorCode,
        isLoading: action.payload.isLoading,
      }
    }
    default: return null;
  }
}

const rootReducers = combineReducers({
  addCurrentUser,
  logOut,
})

export default rootReducers