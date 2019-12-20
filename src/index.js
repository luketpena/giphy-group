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
  yield takeEvery('GET_FAVORITE_LIST',getFavoriteList);
  yield takeEvery('ADD_NEW_FAVORITE', addNewFavorite);
}


// SAGAS

function * addNewFavorite (action) {
  try {
    yield axios.post('/api/favorite',action.payload);
    yield put({type: 'GET_FAVORITE_LIST'})
  }
  catch (error){
    console.log(error);
  }
}

function * getFavoriteList (action) {
  try {
    const getFavoriteResponse = yield axios.get('/api/favorite');
    yield put({type: 'SET_FAVORITE_LIST', payload: getFavoriteResponse.data});
  }
  catch (error) {
    console.log('Error getting favorite list:',error);    
  }
}

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

  const favoriteListReducer = (state=[], action) => {
    switch (action.type) {
      case 'SET_FAVORITE_LIST': return action.payload
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
    categoryReducer,
    favoriteListReducer
  }),
  applyMiddleware(sagaMiddlware, logger)
)

sagaMiddlware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
