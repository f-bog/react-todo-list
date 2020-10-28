import React from 'react';
import useInputState from './hooks/useInputState';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
  const [value, setTodo, reset] = useInputState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return;
    }
    addTodo(value); // pass data to parent
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
        value={value}
        name='task'
        type='text'
        placeholder='Add a todo'
        onChange={setTodo}
      ></input>
    </form>
  );
}

export default NewTodoForm;
