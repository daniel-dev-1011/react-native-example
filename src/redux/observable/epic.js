/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import { ofType, combineEpics } from "redux-observable";
//LOGIN action creators
import { LOGIN, loginSucces, loginFail } from "../action";
//ADD_BOOK action creators
import { ADD_BOOK, addBookSuccess, addBookFail} from '../action/index';
//GET_BOOKS action creators
import { GET_ALL_BOOKS, getBookSuccess, getBookFail} from '../action/index';
//DELETE_BOOK action creators
import { DELETE_BOOK, deleteBookSuccess, deleteBookFail} from '../action/index';
//API Services
import {getDataLoginFromAPI, addNewBookAPI, getAllBooksFromAPI, deleteBookAPI} from '../../api/service';

import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from "rxjs";

const loginEpic = action$ => action$.pipe( //action with dollar sign is identify variables that reference a stream
    ofType(LOGIN),
    mergeMap(action => getDataLoginFromAPI(action.payload)),
    map(response => {
        if (typeof response.data !== 'undefined') {
            return loginSucces(response.data.user.full_name, response.data.user.avatar.thumb_url, false, response.data.user)
        } else {
            return loginFail(response.data.error_code, false)
        }
    }),
    catchError(error => of(loginFail('9999', false)))
);

const addBookEpic = action$ => action$.pipe(
    ofType(ADD_BOOK),
    mergeMap(action => addNewBookAPI(action.payload)),
    map(response => {
        if (response.data.status) {
            return addBookSuccess(false, response.data.status)
        } else {
            return addBookFail(false, response.data.error.message)
        }
    }),
    catchError(error => of(addBookFail(false, true)))
);

const getBookEpic = action$ => action$.pipe(
    ofType(GET_ALL_BOOKS),
    mergeMap(() => getAllBooksFromAPI()),
    map(response => {
        if (response.data) {
            return getBookSuccess(response.data)
        } else {
            return getBookFail(true)
        }
    }),
    catchError(() => of(getBookFail(true)))
);

const deleteBookEpic = action$ => action$.pipe(
    ofType(DELETE_BOOK),
    mergeMap(action => deleteBookAPI(action.payload)),
    map(response => {
        if (response.data) {
            return deleteBookSuccess(response.data)
        } else {
            return deleteBookFail(true)
        }
    }),
    catchError(() => of(getBookFail(true)))
);

const rootEpics = combineEpics(loginEpic, addBookEpic, getBookEpic, deleteBookEpic);

export default rootEpics