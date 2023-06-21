import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text) {
            return
        }
        setTodos([...todos, todo])

    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text) {
            return
        }
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }    

    return (
        <div>
            <h1>Add Todos:</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList