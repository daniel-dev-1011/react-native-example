/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {LOGIN_SUCCESS, LOGIN_FAIL, LOGIN} from '../action/index';
import { put, call, takeEvery } from '../../../node_modules/redux-saga/effects';
import {getDataLoginFromAPI} from '../../api/service';

function* login(action) {
    try {
        const result = yield call(getDataLoginFromAPI, action.payload)
        if (result.data.success) {
            yield put({type: LOGIN_SUCCESS, payload: {
                name: result.data.user.full_name, 
                isLoading: false } 
            })
        } else {
            yield put({type:LOGIN_FAIL, payload: {
                errorCode: result.data.error_code, 
                isLoading: false }
            })
        }
    } catch (error) {
        console.log('error message: ', error)
    }
}

export default function* watchLoginSession() {
    yield takeEvery(LOGIN, login)
}