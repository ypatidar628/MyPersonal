import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "myUserSlice",
    initialState:{
        value:false
    },
    reducers:{
        checkStatus:(state,action)=>{
            var data = action.payload;
            state.value=data; 
        }
    }
})
export const { checkStatus } = slice.actions;
export default slice.reducer;