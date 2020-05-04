/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

/*
* action types
*/

//LOGIN SESSIONS
export const ADD_USER_INFO = 'ADD_USER_INFO'
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'

//GET ALL BOOKS
export const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
export const GET_ALL_BOOKS_SUCCESS = 'GET_ALL_BOOKS_SUCCESS'
export const GET_ALL_BOOKS_FAIL = 'GET_ALL_BOOKS_FAIL'

//REGISTER SESSION
export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL'

//ADD NEW BOOK
export const ADD_BOOK = 'ADD_BOOK'
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS'
export const ADD_BOOK_FAIL = 'ADD_BOOK_FAIL'

//DELETE BOOK
export const DELETE_BOOK = 'DELETE_BOOK'
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS'
export const DELETE_BOOK_FAIL = 'DELETE_BOOK_FAIL'

/*
* action creators (functions below is called Flux Standard Action)
*/

/*
Login session creators
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

export function login(email, password, isLoading) {
  return {
    type: LOGIN,
    payload: {
      email,
      password,
      isLoading,
    }
  }
}

export function loginSucces(name, imageUrl, isLoading, user) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      name,
      imageUrl,
      isLoading,
      user,
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

export function logOut() {
  return {
    type: LOGOUT,
  }
}

/*
Book session creators
*/

export function registerUser(username, password, fullname, isLoading) {
  return {
    type: REGISTER_USER,
    payload: {
      username,
      password,
      fullname,
      isLoading,
    }
  }
}

export function registerUserSuccess(success, isLoading) {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: {
      success,
      isLoading,
    }
  }
}

export function registerUserFail(success, isLoading) {
  return {
    type: REGISTER_USER_FAIL,
    payload: {
      success,
      isLoading
    }
  }
}

export function addBook(title, price, isLoading) {
  return {
    type: ADD_BOOK,
    payload: {
      title,
      price,
      isLoading
    }
  }
}

export function addBookSuccess(isLoading, status) {
  return {
    type: ADD_BOOK_SUCCESS,
    payload: {
      status,
      isLoading
    }
  }
}

export function addBookFail(isLoading, isError) {
  return {
    type: ADD_BOOK_FAIL,
    payload: {
      isLoading,
      isError
    }
  }
}

/*
* Get books creators
*/

export function getBook() {
  return {
    type: GET_ALL_BOOKS,
    payload: {}
  }
}

export function getBookSuccess(data) {
  return {
    type: GET_ALL_BOOKS_SUCCESS,
    payload: {
      data
    }
  }
}

export function getBookFail(isError) {
  return {
    type: GET_ALL_BOOKS_FAIL,
    payload: {
      isError,
    }
  }
}

/**
 * Delete book creators
 */

export function deleteBook(title) {
  return {
    type: DELETE_BOOK,
    payload: {
      title,
    }
  }
}

export function deleteBookSuccess(status) {
  return {
    type: DELETE_BOOK_SUCCESS,
    payload: {
      status
    }
  }
}

export function deleteBookFail(isError) {
  return {
    type: DELETE_BOOK_FAIL,
    payload: {
      isError,
    }
  }
}