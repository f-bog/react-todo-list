import React, { useContext } from 'react';

import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';
import { TodosContext } from './contexts/todos.context';

function TodoList() {
  const todos = useContext(TodosContext);

  return (
    <div className='TodoList'>
      <NewTodoForm />
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
