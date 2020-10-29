import React from 'react';
import TodoList from './TodoList';
import './App.css';
import { TodosProvider } from './contexts/todos.context';

function App() {
  return (
    <div className='App'>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;
