import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import useToggleState from './hooks/useToggleState';
import './Todo.css';
import { DispatchContext } from './contexts/todos.context';
function Todo({ id, completed, task }) {
  const dispatch = useContext(DispatchContext);

  const [isEditing, setEditing] = useToggleState(false);

  const [value, handleChange] = useInputState(task);

  let result;
  if (isEditing) {
    result = (
      <form
        className='Todo-item'
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'EDIT', id: id, newTask: value });
          setEditing();
          // reset();
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
          onClick={() => dispatch({ type: 'TOGGLE', id: id })}
          className={completed ? `completed` : null}
        >
          {task}
        </p>
        <div className='Todo-buttons'>
          <button onClick={setEditing}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button onClick={() => dispatch({ type: 'REMOVE', id: id })}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }
  return <div className='Todo'>{result}</div>;
}

export default Todo;
