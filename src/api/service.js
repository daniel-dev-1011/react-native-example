/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {SIGN_IN_URL} from '../utils/Constants';
import axios from '../../node_modules/axios';

export const getDataLoginFromAPI = (payload) => {
    return axios.post(SIGN_IN_URL, {
        email: payload.email,
        password: payload.password
      })
}