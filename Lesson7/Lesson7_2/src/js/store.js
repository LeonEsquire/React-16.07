import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middlewares = applyMiddleware(promise, thunk, createLogger());

export default createStore(reducer, middlewares);

/* store.state

{
  tweets: {
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
  },
  user: {
    user: {
      id: null,
      name: null,
      age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }
}

*/