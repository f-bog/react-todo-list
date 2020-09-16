import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.id);
  }
  render() {
    return (
      <div className='Todo'>
        <p>{this.props.task}</p>
        <div className='Todo-buttons'>
          <button>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <button onClick={this.handleRemove}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
