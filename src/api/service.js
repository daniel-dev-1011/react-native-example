/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {BASE_URL, BASE_URL_2, LOGIN, GET_ALL_BOOKS, REGISTER, ADD_BOOK, DELETE_BOOK, SIGN_IN} from '../utils/Constants';
import axios from '../../node_modules/axios';

export const getDataLoginFromAPI = (payload) => {
  return axios.post(BASE_URL_2 + SIGN_IN, {
      email: payload.email,
      password: payload.password
    })
}

export const getAllBooksFromAPI = () => {
  return axios.get(BASE_URL + GET_ALL_BOOKS)
}

export const addNewBookAPI = (payload) => {
  return axios.post(BASE_URL + ADD_BOOK, {
    title: payload.title,
    price: payload.price,
  })
}

export const deleteBookAPI = (payload) => {
  return axios.delete(BASE_URL + DELETE_BOOK + payload.title)
}

export const registerUser = (payload) => {
  return axios.post(BASE_URL + REGISTER, {
    username: payload.username,
    password: payload.password,
    fullname: payload.fullname,
  })
}