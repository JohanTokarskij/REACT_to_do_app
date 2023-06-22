import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { AiOutlineEdit } from 'react-icons/ai';
import { IoCloseCircleOutline } from 'react-icons/io5';

const Todo = ({ todos, updateTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  return (
    <>
      {todos.map((todo, i) => {
        if (edit.id === todo.id) {
          return (
            <TodoForm key={i} edit={edit} onSubmit={submitUpdate} />
          );
        } else {
          return (
            <>
              <div className='todo-row' key={i}>
                {todo.text}
                <div className='icons'>
                  <AiOutlineEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
                  <IoCloseCircleOutline onClick={() => removeTodo(todo.id)} className='delete-icon' />
                </div>
              </div>
            </>
          )
        }
      })}
    </>
  );
};

export default Todo;
