import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  removeTodo(id) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  }
  updateTodo(id, newTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div className='TodoList'>
        <h1>Todo List</h1>
        <NewTodoForm addTodo={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo
            task={todo.task}
            key={todo.id}
            id={todo.id}
            remove={this.removeTodo}
            updateTodo={this.updateTodo}
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
