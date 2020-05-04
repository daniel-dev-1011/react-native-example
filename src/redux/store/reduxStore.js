/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { createStore, applyMiddleware } from "redux";
import rootReducers from "../reducer/index";
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import userEpic from '../observable/epic';
import rootSaga from '../saga/saga';

const sagaMiddleware = createSagaMiddleware()

const epicMiddleware = createEpicMiddleware()

const store = createStore(
    rootReducers,
    applyMiddleware(epicMiddleware)
)

epicMiddleware.run(userEpic)

// sagaMiddleware.run(rootSaga)

export default store
