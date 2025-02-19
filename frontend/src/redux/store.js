import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/features/cart/cartSlice"
import gamesApi from './features/games/gamesApi'
import ordersApi from './features/orders/ordersApi'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesApi.middleware,ordersApi.middleware),
})