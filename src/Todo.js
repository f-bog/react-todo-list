import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';
function Todo({ id, completed, task, updateTodo, remove, toggleComplete }) {
  const [value, setValue] = useState(task);
  const [isEditing, setEditing] = useState(false);

  const handleRemove = () => {
    remove(id);
  };

  const handleComplete = e => {
    toggleComplete(id);
  };

  const toggleEdit = () => {
    setEditing({ isEditing: !isEditing });
  };
  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSave = e => {
    e.preventDefault();
    updateTodo(id, task);
    setEditing(false);
  };

  let result;
  if (isEditing) {
    result = (
      <form onSubmit={handleSave}>
        <input
          value={value}
          name='task'
          type='text'
          onChange={handleChange}
          onSubmit={handleSave}
        ></input>
        <button>Save</button>
      </form>
    );
  } else {
    result = (
      <>
        <p onClick={handleComplete} className={completed ? `completed` : null}>
          {task}
        </p>
        <div className='Todo-buttons'>
          <button onClick={toggleEdit}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button onClick={handleRemove}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </>
    );
  }
  return <div className='Todo'>{result}</div>;
}

export default Todo;
