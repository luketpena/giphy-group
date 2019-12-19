import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

//Redux + Saga
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function * rootSaga () {

}


//Creating store instance for Saga
const sagaMiddlware = createSagaMiddleware();
const storeInstance = createStore(
  combineReducers({

  }),
  applyMiddleware(sagaMiddlware, logger)
)

sagaMiddlware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
