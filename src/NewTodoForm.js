import React, { Component } from 'react';
import './NewTodoForm.css';
import uuid from 'uuid/v4';
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value, completed: false, id: uuid(); });
  }

  handleSubmit(e) {
    e.preventDefault;
  }
  render() {
    return (
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
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
