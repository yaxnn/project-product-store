import { createSlice } from '@reduxjs/toolkit'
import Swal  from 'sweetalert2'

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState:initialState,
    reducers:{
        addToCart: (state,action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if(!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product Added to the Cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }else(
                Swal.fire({
                    title: "Item Already Added To The Cart",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  })
            )
        },

        removeFromCart: (state,action) => {
          state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },

        clearCart: (state) => {
         state.cartItems = [] 
        }
    }
})

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;