import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'ProductData',
    initialState:{
        value:[]
},
reducers:{
    addCartData: (state, action) => {
        const productData = action.payload;
        const pid = productData.id;

        const existingProduct = state.value.find((item) => item.productData.id === pid);
            console.log(existingProduct);
            
        if (existingProduct) {

            existingProduct.qty = existingProduct.qty + 1;

        } else {
            state.value = [...state.value,{productData,qty:1}]
        }

    },

    incrimentQty:(state,action)=>
    {
        var pid = action.payload
        state.value = state.value.map((obj)=>obj.productData.id == pid ? {...obj,qty:obj.qty+1}: obj )


    },
    dicrimentQty:(state,action)=>
        {
            var pid = action.payload
            state.value = state.value.map((obj)=>obj.productData.id==pid ?{...obj,qty:obj.qty>0 ?obj.qty-1 : obj==0}:obj )
        },
        removeData:(state,action)=>
        {
            var pid = action.payload
            state.value = state.value.filter((obj)=>obj.productData.id != pid )
          
        }
}

})
export const {addCartData,incrimentQty,dicrimentQty,removeData} = slice.actions
export default slice.reducer;
