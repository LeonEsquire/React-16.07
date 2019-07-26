import React, { Component } from 'react'

export default class LifeCycleMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
    console.log('1. constructor()');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps()');
    return null;
  }

  render() {
    console.log('3. render()');
    return (
      <div>
        Это LifeCycleMount
      </div>
    )
  }

  componentDidMount() {
    console.log('4. componentDidMount()');
  }
}
