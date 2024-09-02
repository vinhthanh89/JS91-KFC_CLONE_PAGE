import { configureStore } from '@reduxjs/toolkit'
import orderDataSlice from '../features/orderData/orderDataSlice'
import foodDataSlice from '../features/foodData/foodDataSlice'

export const store = configureStore({
  reducer: {
    orderData : orderDataSlice,
    foodData : foodDataSlice
  },
})