const uuidv4 = require('uuid/v4');

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};

export default reducer;
// {type: "ADD", task: "Walk the dog"}
// {type: "REMOVE", id: 123}

// addTodo: newTodoText => {
//   setTodos();
// },
// removeTodo: todoId => {
//   // filter out removed todo
//   const updatedTodos = ;
//   // call setTodos with new todos array
//   setTodos(updatedTodos);
// },
// toggleTodo: todoId => {
//   const updatedTodos =
//   setTodos(updatedTodos);
// },
// editTodo: (todoId, newTask) => {
//   const updatedTodos = ;
//   setTodos(updatedTodos);
// },
