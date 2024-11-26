import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "myUserSlice",
    initialState:{
        value:{userStatus:false}
    },
})
export default slice.reducer;