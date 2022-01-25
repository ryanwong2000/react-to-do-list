import TodoList from './TodoList';
import React, { useState, useRef } from 'react';

function App() {
  const [todos, setTodos] = useState([]); //obj destructuring

  function handleAddTodo(e) {}

  return (
    <>
      <TodoList todoList={todos} />
      <input ref={todoNameRef} type="text" />
      <button onCLick={handleAddTodo}> Add To Do</button>
      <button>Clear Completed Tasks</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
