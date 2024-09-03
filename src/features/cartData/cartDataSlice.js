import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("cartRedux")) || [],
};

export const cartDataSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const cartItem = action.payload;
      const checkItemExits = state.value.find(
        (item) => item.id === cartItem.id
      );

      if (checkItemExits) {
        checkItemExits.quantity += cartItem.quantity;
      } else {
        state.value.push(cartItem);
      }
      localStorage.setItem("cartRedux", JSON.stringify(state.value));
    },

    deleteProduct: (state, action) => {
      const productId = action.payload

      const filterValue = state.value.filter(
        (item) => item.id !== productId
      );

      state.value = filterValue;
      localStorage.setItem("cartRedux", JSON.stringify(filterValue));
    },

    increaseProductQuantity : (state , action) => {
      const productId = action.payload  
      
      const findCartItem = state.value.find(item => item.id === productId)
      findCartItem.quantity += 1
      localStorage.setItem("cartRedux", JSON.stringify(state.value));
    },

    decreaseProductQuantity : (state , action) => {
      const productId = action.payload
      
      const findCartItem = state.value.find(item => item.id === productId)
      findCartItem.quantity -= 1
      localStorage.setItem("cartRedux", JSON.stringify(state.value));
    }
  },
});

export const { addProduct, deleteProduct , increaseProductQuantity , decreaseProductQuantity } = cartDataSlice.actions;

export default cartDataSlice.reducer;
