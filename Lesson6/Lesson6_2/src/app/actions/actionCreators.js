import axios from 'axios';
import dispatcher from '../dispatcher';

export function addPost(title, userId, body) {
  const action = {
    type: 'ADD_POST',
    data: { title, userId, body }
  }
  dispatcher.dispatch(action);
}

export function getPosts() {
  axios.get('http://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      const action = {
        type: 'GET_POSTS',
        data: response.data
      }
      dispatcher.dispatch(action);
    })
}