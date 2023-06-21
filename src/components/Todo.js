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

  const getRandomColor = () => {
    // Generate random RGB values between 0 and 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the random color as an RGB string
    return `rgb(${r}, ${g}, ${b})`;
  };

  const todoRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '4px auto',
    color: '#fff',
    background: `linear-gradient(90deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`,
    padding: '16px',
    borderRadius: '5px',
    width: '90%',
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
              <div  className='icons'>
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
