import React from 'react';
import useInputState from './hooks/useInputState';
import './NewTodoForm.css';
const { v4: uuidv4 } = require('uuid');
function NewTodoForm({ addTodo }) {
  const [todo, setTodo, reset] = useInputState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (todo === '') {
      return;
    }
    addTodo({ task: todo, id: uuidv4(), completed: false }); // pass data to parent
    reset();
  };

  return (
    <form className='NewTodoForm' onSubmit={handleSubmit}>
      <label htmlFor='task'>
        <h1>Todo List</h1>
      </label>
      <br />
      <input
        id='task'
        value={todo}
        name='task'
        type='text'
        placeholder='Add a todo'
        onChange={setTodo}
      ></input>
      {/* <button>New Todo</button> */}
    </form>
  );
}

export default NewTodoForm;
