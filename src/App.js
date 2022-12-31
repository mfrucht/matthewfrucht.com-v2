import React, { Component } from 'react';
import './App.css';

const images = [
  './assets/images/backdrop1.png',
  './assets/images/backdrop2.png',
  './assets/images/backdrop3.png'];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { imgInd: 1 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.imgInd === images.length - 1 ? this.setState({ imgInd: 0 }) 
        : this.setState(prevState => { return { imgInd: prevState.imgInd+1 }})
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ backgroundImage: `url(${images[this.state.imgInd]})`}}>
          <p style={{color: 'black'}}>Matthew Frucht</p>
        </header>
      </div >
    );
  }
}

export default App;