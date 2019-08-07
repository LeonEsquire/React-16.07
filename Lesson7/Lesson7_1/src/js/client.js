import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';


const initialState = {
  users: [],
  fetching: false,
  fetched: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      return { ...state, fetching: true }
    case "FETCH_USERS_FULFILLED":
      return {
        ...state,
        users: action.payload,
        fetching: false,
        fetched: true
      }
    case "FETCH_USERS_REJECTED":
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
  }
  return state;
}

const middlewares = applyMiddleware(promise, thunk, createLogger());
const store = createStore(reducer, middlewares);


store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get('http://jsonplaceholder.typicode.com/users').then(response => response.data)
})




