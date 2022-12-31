import React, { Component } from 'react';
import './App.css';

const images = ['./assets/images/backdrop1.png', './assets/images/backdrop2.png'];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { imgUrl: images[1] };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.imgUrl === images[0] ? this.setState({ imgUrl: images[1] }) 
        : this.setState({ imgUrl: images[0] })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{backgroundImage: `url(${this.state.imgUrl})`}}>
          <p style={{color: 'black'}}>Under Construction</p>
        </header>
      </div >
    );
  }
}

export default App;