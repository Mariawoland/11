import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mnishv: ''
    };
  }

  componentDidMount() {
    window.alert('გვერდი ჩაიტვირთა');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mnishv !== this.state.mnishv) {
      window.alert('გვერდზე დაფიქსირდა განახლება');
    }
  }

  cvlileba = (event) => {
    this.setState({ mnishv: event.target.value });
  };

  render() {
    return (
      <form className='d-flex gap-2 w-50'>
        <input className='form-control' value={this.state.mnishv} onChange={this.cvlileba} placeholder='დაწერე რამე რომ ნახო როდის ხდება ცვლილება...' />
        <button type='submit' className='btn btn-light'>გაგზავნა</button>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
