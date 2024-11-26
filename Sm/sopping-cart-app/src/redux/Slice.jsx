import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
        name:'myData',
        initialState:{
            value:[]
        },
        reducers:{
                    addCartData:(state,action)=>{
                        var productData = action.payload;
                        state.value = [...state.value,{productData,qty : 1}]
                        // state.value = [state.value,state.value.forEach(obj=>obj.value != productData ? {productData,qty: 1} : obj.productData ) ]
                    },
                    incrementqty:(state,action)=>
                    {
                        var pid= action.payload
                        state.value = state.value.map(obj=>obj.productData.id==pid ? {...obj,qty:obj.qty+1}:obj)
                        
                    },
                    decrementqty:(state,action)=>
                        {
                            var pid = action.payload
                            // state.value = state.value.map(obj=>obj.productData.id==pid?{...obj, qty:obj.qty-1}:obj)
                            state.value = state.value.map(obj=>obj.productData.id==pid?{...obj,qty:obj.qty>0? obj.qty-1 : obj.qty=0 }:obj)
                            //  state.value = state.value.map(obj=> obj.qty==0 ? {state.value.filter(obj)=>{obj.productData.id!=pi}:obj )   
                            
                        },
                        removeProduct:(state,action)=>
                        {
                            var pid = action.payload
                            state.value = state.value.filter(obj=>obj.productData.id != pid)

                        }


        }

})
export const {addCartData,incrementqty,decrementqty,removeProduct} = slice.actions
export default slice.reducer