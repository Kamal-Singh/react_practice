import React, { Component } from 'react';
import './App.css';
import UserOutput from './userOutput/userOuput';
import UserInput from './userInput/userInput';

class App extends Component {
  state = {
    'username': 'abc'
  }
  updateUsernameHandler = (event) => {
    let updateUsername = event.target.value;
    this.setState({'username': updateUsername});
  }
  render() {
  return (
    <div className="App">
      <p>is this working!!</p>
      <UserOutput username={this.state.username} />
      <UserInput change={this.updateUsernameHandler} username={this.state.username} />
    </div>
  );
}
}

export default App;
