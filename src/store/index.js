import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "@/store/member";
const store = configureStore({
    reducer: {
        members: memberReducer,
    },
});

export default store;
