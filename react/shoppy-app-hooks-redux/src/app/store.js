import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from '../feature/cart/cartSlice.js'

export default configureStore({
  reducer: {
    "cart" : cartSlice,
  },
})