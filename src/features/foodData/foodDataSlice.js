import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : []
}

export const foodDataSlice = createSlice({
    name : 'foodData',
    initialState,
    reducers : {
        setFoodDataSlice : (state , action) => {
            console.log(action);
            
            state.value = action.payload
        }
    }
})

export const {setFoodDataSlice} = foodDataSlice.actions;

export default foodDataSlice.reducer;
