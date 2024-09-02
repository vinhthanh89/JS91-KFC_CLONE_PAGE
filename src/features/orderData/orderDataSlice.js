import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : []
}

export const orderDataSlice = createSlice({
    name : 'orderData',
    initialState,
    reducers : {
        setOrderDataSlice : (state , action) => {
            console.log(action);
            
            state.value = action.payload
        }
    }
})

export const {setOrderDataSlice} = orderDataSlice.actions;

export default orderDataSlice.reducer;
