/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

/*
* action types
*/
export const ADD_USER_INFO = 'ADD_USER_INFO'
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

/*
* action creators (functions below is called Flux Standard Action)
*/

export function addUserInfo(email, password) {
  return { 
    type: ADD_USER_INFO, 
    payload: {
      email,
      password
    } 
  }
}

export function login(email, password, isLoading, state) {
  return {
    type: LOGIN,
    payload: {
      email,
      password,
      isLoading,
      state,
    }
  }
}

export function loginSucces(name, isLoading) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      name,
      isLoading,
    }
  }
}

export function loginFail(errorCode, isLoading) {
  return {
    type: LOGIN_FAIL,
    payload: {
      errorCode,
      isLoading,
    }
  }
}