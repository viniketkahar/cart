import { createAction, createReducer } from '@reduxjs/toolkit'

const addToCart = createAction("addToCart")
const deleteFromCart = createAction("deleteFromCart")
const decrement = createAction("decrement")

export const cartReducer = createReducer({
    cartItem: [], total: 0,
}, (builder) => {
    builder.addCase(addToCart, (state, action) => {
        const item = action.payload;
        const isItemExist = state.cartItem.find((i) => i.id === item.id);

        if (isItemExist) {
            state.cartItem.forEach((i) => {
                if (i.id === item.id) {
                    i.qty += 1;
                }
            })
        }
        else {
            state.cartItem.push(item)
        }
    })
    builder.addCase(deleteFromCart, (state, action) => {
        state.cartItem = state.cartItem.filter((i) => i.id !== action.payload);
    })

    builder.addCase(decrement, (state, action) => {
        const item = state.cartItem.find((i) => i.id === action.payload);
        if (item.qty > 1) {
            item.qty -= 1;
        }
    })
}
);