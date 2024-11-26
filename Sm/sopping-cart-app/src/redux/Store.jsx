import { configureStore } from "@reduxjs/toolkit";
import sliceReducre from './Slice.jsx'
const store = configureStore({
    reducer:{
        
    MyStoreData :  sliceReducre
}
})
export default store