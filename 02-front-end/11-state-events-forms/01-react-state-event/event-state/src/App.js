import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      buttonOne: 0,
      buttonTwo: 0,
      buttonTree: 0
    }
    this.clickButtonOne = this.clickButtonOne.bind(this);
    this.clickButtonTwo = this.clickButtonTwo.bind(this);
    this.clickButtonTree = this.clickButtonTree.bind(this);

  }

  clickButtonOne = () => {
    this.setState((estadoAnterior, _) => ({
      buttonOne: estadoAnterior.buttonOne + 1
    }))
  }
  clickButtonTwo = () => {
    this.setState((estadoAnterior, _) => ({
      buttonTwo: estadoAnterior.buttonTwo + 1
    }))
  }
  clickButtonTree = () => {
    this.setState((estadoAnterior, _) => ({
      buttonTree: estadoAnterior.buttonTree + 1
    }))
  }

  isGreen = (num) => {
    if (num % 2 === 0) {
      return 'green'
    } return 'white'
  }

  render() {
    const { buttonOne, buttonTwo, buttonTree } = this.state; 
    return (
      <>
        <button onClick={this.clickButtonOne} style={{backgroundColor: this.isGreen(buttonOne)}}>{this.state.buttonOne}</button>
        <button onClick={this.clickButtonTwo}>{this.state.buttonTwo}</button>
        <button onClick={this.clickButtonTree}>{this.state.buttonTree}</button>
      </>
    )
  }
}

export default App;