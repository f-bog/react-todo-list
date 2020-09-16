import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './Todo.css';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.id);
  }
  toggleCompleted() {
    this.setState((prevState) => ({ completed: !prevState.completed }));
  }
  render() {
    return (
      <div className='Todo'>
        <button
          onClick={this.toggleCompleted}
          className={this.state.completed ? `completed` : null}
        >
          {this.props.task}
        </button>
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
