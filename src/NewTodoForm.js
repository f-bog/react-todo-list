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
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: uuid() }); // pass data to parent
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
