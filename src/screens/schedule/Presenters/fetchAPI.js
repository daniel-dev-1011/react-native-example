/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import { getBook, deleteBook } from '../../../redux/action/index';
import store from '../../../redux/store/reduxStore';

export const fetchAPI = () => {
  store.dispatch(getBook())
}

export const deleteAPI = (title) => {
  store.dispatch(deleteBook(title))
}