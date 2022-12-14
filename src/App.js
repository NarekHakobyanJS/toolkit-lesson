import React from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import User from './components/User'
import Posts from './components/Posts'
import "./App.css"
import { useSelector } from 'react-redux'

function App() {
    const todos = useSelector(state => state.todo.todos)
    console.log(todos)
    return (
        <div className='app'>
            <div className='content'>
                <header className='header'>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Redux Toolkit State Change</h1>
                        <User />
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Redux Toolkit Todo App</h1>
                        <Form />
                        {
                            todos.map(todo => (
                                <TodoItem todo={todo} />
                            ))
                        }
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Redux Toolkit Async Thunk</h1>
                        <Posts />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default App
