import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"

export default combineReducers({
  tweets: tweets,
  user: user,
})


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