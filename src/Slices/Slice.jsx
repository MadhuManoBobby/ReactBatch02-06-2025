import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
const CustomerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
        addCustomer(state,action){
            state.push(action.payload)
        },
        deleteCustomer(state,action){
            let deletedIndex = action.payload
            return state.filter((value,index) => index!==deletedIndex)
        }
    }

})

export const {addCustomer,deleteCustomer} = CustomerSlice.actions
export default CustomerSlice.reducer