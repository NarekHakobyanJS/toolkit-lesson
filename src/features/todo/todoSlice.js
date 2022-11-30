import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleComplitedTodo: (state, action) => {
            const toggleTodo = state.todos.find(todo => todo.text === action.payload)
            toggleTodo.complited = !toggleTodo.complited
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.text !== action.payload)
        }
    }

})

export const { addTodo, toggleComplitedTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
