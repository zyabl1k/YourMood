import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import isDark from "./slices/isDark";

export const store = configureStore({
    reducer: {
        user: userReducer,
        isDark: isDark
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;