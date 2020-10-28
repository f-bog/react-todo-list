import React from 'react';
import useInputState from './hooks/useInputState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import useToggleState from './hooks/useToggleState';
import './Todo.css';

function Todo({ id, completed, task, editTodo, removeTodo, toggleTodo }) {
  const [isEditing, setEditing] = useToggleState(false);

  const [value, handleChange, reset] = useInputState(task);

  let result;
  if (isEditing) {
    result = (
      <form
        className='Todo-item'
        onSubmit={e => {
          e.preventDefault();
          editTodo(id, value);
          setEditing();
          reset();
        }}
      >
        <input
          value={value}
          name='task'
          type='text'
          onChange={handleChange}
        ></input>
        <button>Save</button>
      </form>
    );
  } else {
    result = (
      <div className='Todo-item'>
        <p
          onClick={() => toggleTodo(id)}
          className={completed ? `completed` : null}
        >
          {task}
        </p>
        <div className='Todo-buttons'>
          <button onClick={setEditing}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button onClick={() => removeTodo(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }
  return <div className='Todo'>{result}</div>;
}

export default Todo;
