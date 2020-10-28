import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

function TodoList() {
  // const localTodoStorage = JSON.parse(window.localStorage.getItem('todos'));
  // const [todos, setTodos] = useState(localTodoStorage || []);
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='TodoList'>
      <NewTodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          {...todo}
          key={todo.id}
          removeTodo={removeTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
