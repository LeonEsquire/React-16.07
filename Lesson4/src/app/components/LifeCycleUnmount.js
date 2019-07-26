import React, { Component } from 'react'

export default class LifeCycleUpdate extends Component {
  render() {
    return (
      <div>
        Лишний компонент
      </div>
    )
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

}
