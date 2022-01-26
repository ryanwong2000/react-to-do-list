import React from 'react';
import Todo from './Todo.js';

export default function TodoList({ todoList, toggleTodo }) {
  return todoList.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />; //'key'is a unique key that can identify the component
  });
}
