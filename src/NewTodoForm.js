import React, { Component } from 'react';
import './NewTodoForm.css';
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value, completed: false });
  }
  render() {
    return (
      <form className='NewTodoForm'>
        <input
          value={this.state.task}
          type='text'
          placeholder='Add a todo'
          onChange={this.handleChange}
        ></input>
        <button>New Todo</button>
      </form>
    );
  }
}
export default NewTodoForm;
