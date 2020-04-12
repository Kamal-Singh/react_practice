import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    "inputText": ""
  }
  inputChangeHandler = (event) => {
    let newInputText = event.target.value;
    this.setState({"inputText": newInputText});
  }
  removeCharComponentHandler = (key) => {
    let newInputText = this.state.inputText;
    let tmpArray = newInputText.split('');
    tmpArray.splice(key,1);
    newInputText = tmpArray.join('');
    this.setState({"inputText": newInputText});
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.inputText.length}</h1>
        <ValidationComponent len={this.state.inputText.length} />
        <input type="text" onChange={this.inputChangeHandler} value={this.state.inputText}/>
        <div>
          { [].map.call(this.state.inputText,(char,idx) => <CharComponent click = {this.removeCharComponentHandler.bind(this,idx)} 
            key={idx} character={char} /> ) }
        </div>
      </div>
    );
}
}

export default App;
