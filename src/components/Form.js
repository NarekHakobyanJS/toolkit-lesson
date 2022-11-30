import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const Form = () => {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState('yo')

    const addTodoHandler = () => {
        let todo = {
            id : 1,
            text : todoValue,
            complited : false
        }
        dispatch(addTodo(todo))
        setTodoValue('')
    }
    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Type something...'
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
            />
            <button
                type='submit'
                onClick={() => addTodoHandler()}
            >
                Submit
            </button>
        </form>
    )
}

export default Form