import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplitedTodo, removeTodo } from '../features/todo/todoSlice'
import "../App.css"

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()

    const toggleTodoHandler = (name) => {
        dispatch(toggleComplitedTodo(name))
    }

    const removeTodoHandler = (name) => {
        console.log(name)
        dispatch(removeTodo(name))
    }
    return (
        <div className='flex justify-between items-center my-2'>
            <div onClick={() => toggleTodoHandler(todo.text)}>
                Complete
            </div>
            <div className={todo.complited ? "active" : null}>
               
               {todo.text}
            </div>
            <div onClick={() => removeTodoHandler(todo.text)}>
                Delete
            </div>
        </div>
    )
}

export default TodoItem