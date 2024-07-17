import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // 장바구니 아이템 목록
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        removeFromCart(state, action) {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
