import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return (
      <div className="card border-secondary mb-3">
        <h3 className="card-header">{this.props.title}</h3>
        <div className="card-body text-secondary">
          <div>{this.props.body}</div>
        </div>
      </div>
    )
  }
}
