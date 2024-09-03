import { configureStore } from '@reduxjs/toolkit'
import orderDataSlice from '../features/orderData/orderDataSlice'
import foodDataSlice from '../features/foodData/foodDataSlice'
import cartDataSlice from '../features/cartData/cartDataSlice'

export const store = configureStore({
  reducer: {
    orderData : orderDataSlice,
    foodData : foodDataSlice,
    cartData : cartDataSlice,
  },
})