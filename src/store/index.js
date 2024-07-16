import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "@/store/member";
import cartReducer from "@/store/cart";
const store = configureStore({
    reducer: {
        members: memberReducer,
        cart: cartReducer,
    },
});

export default store;
