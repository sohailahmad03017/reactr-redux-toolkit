import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginReducier"

const store = configureStore({
    reducer: {
        loginReducer : loginSlice,
    },
});

export default store;