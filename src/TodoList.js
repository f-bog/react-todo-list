import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className='TodoList'>
      <h1>Todo List!</h1>
      <NewTodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          {...todo}
          key={todo.id}
          remove={removeTodo}
          updateTodo={updateTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;
