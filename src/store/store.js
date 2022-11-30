//configureStore - Այն Ֆունցիան որը ստեղծում է store որի մեջ կպահպանենք մեր ողջ store 
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import todoSlice from "../features/todo/todoSlice";
import postSlice from "../features/post/postSlice";
//Կանչումենք configureStore որին փոխանցումենք Օբեյկտ Options 
// Մեր օրինակում այդ Options միայն reducerն է որը ներկա պահին դատարկ Օբյեկտ է
const store = configureStore({
    reducer : {
        user : userSlice,
        todo : todoSlice,
        post : postSlice
    }
})

export default store