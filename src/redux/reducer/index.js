/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {ADD_USER_INFO, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN} from '../action/index';

const initialState = {
  userName: '',
  passWord: '',
}

const addCurrentUser = (state = initialState, action) => {
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
        isLoading: action.payload.isLoading,
      }
    }
    case LOGIN_FAIL: {
      return state = {
        state: action.type,
        errorCode: action.payload.errorCode,
        isLoading: action.payload.isLoading,
      }
    }
    default:
      break
  }
}

export default addCurrentUser