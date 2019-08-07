/////////// 1.

import { combineReducers, createStore } from 'redux';

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case "CHANGE_NAME":
			return { ...state, name: action.payload }
		case "CHANGE_AGE":
			return { ...state, age: action.payload }
	}
	return state;
}

const tweetsReducer = (state = [], action) => {
	return state;
}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
});


const store = createStore(reducers);


store.subscribe(() => {
	console.log('store изменился', store.getState());
})

store.dispatch({ type: "CHANGE_NAME", payload: 'Max' });
store.dispatch({ type: "CHANGE_AGE", payload: 35 });


/////////////// 2.


import { applyMiddleware, createStore } from 'redux';

const reducer = (state = 0, action) => {
	if (action.type === 'INC') {
		return state + 1;
	} else if (action.type === "DEC") {
		return state - 1;
	} else if (action.type === "E") {
		throw new Error("!!!!!!");
	}
	return state;
}

const error = (store) => (next) => (action) => {
	try {
		next(action)
	} catch (e) {
		console.log("AAAAAAA", e)
	}
}

const logger = (store) => (next) => (action) => {
	console.log('сработал action', action);
	next(action);
}

const middlewares = applyMiddleware(logger, error);

const store = createStore(reducer, middlewares);

store.subscribe(() => {
	console.log('store изменился', store.getState())
})

store.dispatch({ type: "INC" })
store.dispatch({ type: "E" })


//////// 3.


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




