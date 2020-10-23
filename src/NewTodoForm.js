import React, { useState } from 'react';
import './NewTodoForm.css';
const { v4: uuidv4 } = require('uuid');
function NewTodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ task: '' });

  const handleChange = e => {
    setTodo({ task: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (todo.task === '') {
      return;
    }
    addTodo({ task: todo.task, id: uuidv4(), completed: false }); // pass data to parent
    setTodo({ task: '', id: null });
  };

  return (
    <form className='NewTodoForm' onSubmit={handleSubmit}>
      <label htmlFor='task'>Add a todo</label>
      <br />
      <input
        id='task'
        value={todo.task}
        name='task'
        type='text'
        placeholder='Add a todo'
        onChange={handleChange}
      ></input>
      <button>New Todo</button>
    </form>
  );
}

export default NewTodoForm;
