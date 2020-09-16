import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: 'Walk my dog', completed: false },
        { task: 'Milk my cat', completed: false },
        { task: 'Make burgers', completed: false },
      ],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  render() {
    return (
      <div className='TodoList'>
        <h1>Add a Todo</h1>
        <NewTodoForm />
        {this.state.todos.map((todo) => (
          <Todo task={todo.task} addTodo={this.addTodo} />
        ))}
      </div>
    );
  }
}
export default TodoList;
