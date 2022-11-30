//Ինչ է Slice ը՞ Slice պատասխանատու է իրեն փոխանցած State ի աշխատանքի համար 
//createSlice - Ֆունկցիա որը գալիսա @reduxjs/toolkit գրադարանից
// Որին կանչումենք և փոխանցում Option եր
import { createSlice } from "@reduxjs/toolkit";

// initalState մեր state ի նախնական արժեքը 
const initalState = {
    firstName : '',
    lastName : ''
}

//createSlice - Ֆունկցիան կանչում ենք նրան փոխանցելով Օբյեկտ
//որի մեջ գրում ենք Options երը 
//Options
//1 name = մեր Reducer անունը որը պետքե լինի ունիկալ
//2 initalState = մեր state ի նախնական արժեքը 
//3 reducers = Օբյեկտա Ֆունկցիաների որը հենց պետքա ղեկավարի մեր state
export const userSlice = createSlice({
    name : "user",
    initialState : initalState,
    // setFirstName մեր Ֆունկցայի անուն է այս ֆունցիան 
    // ստանում է պարամատրնեռ 
    //1 state 2 action
    reducers : {
        setFirstName : (state, action) => {
            state.firstName = action.payload
        },
        setLastName : (state, action) => {
            state.lastName = action.payload
        },
    }
})

// ստեղծում ենք action setFirstName անունով userSlice.actions ից
export const {setFirstName, setLastName} = userSlice.actions 
// export reducer ը userSliceից 
export default userSlice.reducer