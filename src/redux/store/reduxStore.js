/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/saga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
