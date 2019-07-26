import React, { Component } from 'react'

export default class LifeCycleUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    console.log('constructor()');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('1. getDerivedStateFromProps()');
    return null;
  }

  shouldComponentUpdate() {
    console.log('2. shouldComponentUpdate()');
    return true;
  }

  render() {
    console.log('3. render()');
    return (
      <div>
        {this.state.count}
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>Увеличить счетчик</button>
      </div>
    )
  }

  getSnapshotBeforeUpdate() {
    console.log('4. getSnapshotBeforeUpdate()');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('5. componentDidUpdate()');
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }
}
