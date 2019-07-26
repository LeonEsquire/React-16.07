import React from 'react';
import ReactDOM from 'react-dom';

import LifeCycleUnmount from './app/components/LifeCycleUnmount';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayComponent: true
    }
  }

  render() {
    return (
      <div>
        {this.state.displayComponent ? <LifeCycleUnmount /> : null}
        <button onClick={() => this.setState({ displayComponent: false })}>
          Удалить компонент
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));