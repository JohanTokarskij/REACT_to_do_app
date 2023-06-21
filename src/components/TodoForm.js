import React, { useState, useEffect, useRef } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Date.now(),
            text: input
        })

        setInput('')
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                {!props.edit ? (
                    <>
                        <input
                            type='text'
                            placeholder='Add a todo!'
                            value={input}
                            name='text'
                            className='todo-input'
                            onChange={handleChange}
                            ref={inputRef} />
                        <button className='todo-button'>Add todo</button>
                    </>
                ) : (
                    <><input
                        type='text'
                        placeholder='Edit'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef} />
                        <button className='todo-button edit'>Edit</button>
                    </>
                )}

            </form>
        </div>
    )
}

export default TodoForm