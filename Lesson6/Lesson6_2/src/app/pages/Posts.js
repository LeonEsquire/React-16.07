import React, { Component } from 'react';

import PostsList from '../components/PostsList';
import { addPost, getPosts } from '../actions/actionCreators';
import PostStore from '../stores/postStore';

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
    this.onPostChange = this.onPostChange.bind(this);
  }

  post() {
    // Добавление поста
    const title = 'Новый пост';
    const userId = 1;
    const body = 'Текст поста'
    addPost(title, userId, body);
  }

  onPostChange() {
    const posts = PostStore.posts;
    console.log('hi')
    this.setState({ posts });
  }

  componentDidMount() {
    PostStore.on('change', this.onPostChange);
    getPosts();
  }

  componentWillUnmount() {
    PostStore.removeListener('change', this.onPostChange);
  }

  render() {
    console.log(this.state.posts)
    return (
      <div>
        <button onClick={this.post} className="btn btn-primary">Добавить пост</button>
        <PostsList posts={this.state.posts} />
      </div>
    )
  }
}
