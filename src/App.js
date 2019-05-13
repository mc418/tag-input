import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      lists: ['asdf'],
      input: ''
    }
  }

  handleInput = e => {
    this.setState({ input: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.setState({ lists: [...new Set([...this.state.lists, this.state.input])], input: '' });
    }
  }

  handleDelete = email => {
    this.setState({ lists: this.state.lists.filter((ele) => ele !== email) })
  }

  render() {
    const { lists, input } = this.state;
    return (
      <div className="container">
        {lists.map((ele, index) => {
          return <div className="tag" key={index}>
            {ele}
            <button class="fas fa-backspace" onClick={() => this.handleDelete(ele)}></button>
          </div>
        })}
        <input 
          placeholder="type in new tag here" 
          className="input"
          onChange={this.handleInput} 
          value={input} 
          onKeyPress={this.handleKeyPress}
        ></input>
      </div>
    );
  }
}

export default App;
