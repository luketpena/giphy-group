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
  yield takeEvery('GET_CATEGORIES', getCategories);
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

function * getCategories (action) {
  try {
    const getResponse = yield axios.get('/api/category');
    yield put ({type: 'SET_CATEGORIES', payload: getResponse.data})
  }
  catch (error) {
    console.log('error on getting categories:',error);
  }
}


 // REDUCERS
  const searchReducer = (state=[], action) => {
    if(action.type === 'GET_SEARCH'){
      return action.payload;
    }
    return state;
  }

  const favoriteReducer = (state={
    title: 'DEFAULT',
    image_url: '',
    categories: []
  }, action) => {
    console.log(action.payload)
    switch (action.type) {
      case 'SELECT_IMAGE': return action.payload
      default: return state;
    }
  }

  const categoryReducer = (state=[], action)=> {
    switch (action.type) {
      case 'SET_CATEGORIES': 
        return action.payload
      default: 
        return state;
    }
  }






//Creating store instance for Saga
const sagaMiddlware = createSagaMiddleware();
const storeInstance = createStore (
  combineReducers({
    searchReducer,
    favoriteReducer,
    categoryReducer
  }),
  applyMiddleware(sagaMiddlware, logger)
)

sagaMiddlware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
