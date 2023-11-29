import React from 'react';
import ReactDOM from 'react-dom';
import Window from './app';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mnishv: ''
    };
  }

  render() {
    return (
      <>
        <Window />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
