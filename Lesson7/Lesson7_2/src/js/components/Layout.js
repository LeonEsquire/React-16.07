import React from "react";
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions';
import { fetchTweets } from '../actions/tweetsActions';

class Layout extends React.Component {
  fetchTweets() {
    this.props.dispatch(fetchTweets());
  }

  render() {
    const { user, tweets } = this.props;
    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>Загрузить твиты</button>
    }
    const mappedTweets = tweets.map(tweet => <li key={tweet.text}>{tweet.text}</li>)
    return <div>
      <h1>{user.name}</h1>
      <ul>
        {mappedTweets}
      </ul>
    </div>
  }

  componentDidMount() {
    this.props.dispatch(fetchUser())
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    tweets: state.tweets.tweets
  };
}

export default connect(mapStateToProps)(Layout);