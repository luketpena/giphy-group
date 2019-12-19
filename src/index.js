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
  yield takeEvery('SEARCH_GIPHY', searchGiphy);
}
 // SAGAS
function * searchGiphy (action) {
  try{
    console.log('ACTION PAYLOAD-->',action.payload);
    const getSearchResponse = yield axios.get(`/api/giphy/search/${action.payload}`);
    yield put ({ type: 'GET_SEARCH', payload: getSearchResponse.data})
  }
  catch (error){
    console.log('error getting giphy search:', error);
    
  }
}
  // REDUCERS
  const searchReducer = (state=[], action) => {
    if(action.type === 'GET_SEARCH'){
      return action.payload;
    }
    return state;
  }


//Creating store instance for Saga
const sagaMiddlware = createSagaMiddleware();
const storeInstance = createStore (
  combineReducers({
    searchReducer
  }),
  applyMiddleware(sagaMiddlware, logger)
)

sagaMiddlware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
