import React, { Component } from 'react';
import './NewTodoForm.css';
const {"v4": uuidv4} = require('uuid');
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
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.task === '') {
      return;
    }
    this.props.addTodo({ ...this.state, id: uuidv4(), completed: false }); // pass data to parent
    this.setState({ task: '', id: null });
  }

  render() {
    return (
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Add a todo</label>
        <br />
        <input
          id='task'
          value={this.state.task}
          name='task'
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
