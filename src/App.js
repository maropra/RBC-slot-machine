import React from 'react';
import './App.css';
import Slot from './components/Slot.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      slots: ['🍔', '🍕', '🍟'],
      counter: 0
    }
  }

  getSymbol() {
    let symbols = ['🍔', '🍕', '🍟'];
    return (symbols[Math.floor(Math.random() * symbols.length)]);
  }

  handleClick = () => {
    this.setState({
      slots: [this.getSymbol(), this.getSymbol(), this.getSymbol()],
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Slot Machine!</h1>
        <Slot s1={this.state.slots[0]} s2={this.state.slots[1]} s3={this.state.slots[2]} />
        <button className="play-btn" onClick={this.handleClick}>Play!</button>
        <p>Round</p>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default App;
