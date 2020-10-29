import React, { useContext } from 'react';
import { DispatchContext } from './contexts/todos.context';
import useInputState from './hooks/useInputState';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  return (
    <form
      className='NewTodoForm'
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'ADD', task: value });
        reset();
      }}
    >
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
        onChange={handleChange}
      ></input>
    </form>
  );
}

export default NewTodoForm;
