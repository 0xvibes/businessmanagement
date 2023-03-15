import React from 'react'
import Todoform from './components/todoform.js';
import Todolist from './components/todolist.js';
import Todo from './components/todo.js';

const todopage = () => {
  return (
    <div>
        {/* <Todoform /> */}
        <Todolist />
        <Todo 
        todos={todos}
        completeTodo={completeTodo}
        />
    </div>
  )
}

export default todopage