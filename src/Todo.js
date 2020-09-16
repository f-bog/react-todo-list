import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';
class Todo extends Component {
  render() {
    return (
      <div className='Todo'>
        <p>{this.props.task}</p>
        <div className='Todo-buttons'>
          <button>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
