import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppDispatch} from "../store";

export interface Authorization {
    value: {
        name: string;
        pass: number;
    }
}

const initialState: Authorization = {
    value: {
        name: "",
        pass: 0,
    }
}

export const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUserName: (state: Authorization, action: PayloadAction<string>) => {
            state.value.name = action.payload;
        },
        setUserPass: (state: Authorization, action: PayloadAction<number>) => {
            state.value.pass = action.payload;
        },
        clearAll: (state: Authorization) => {
            state.value = initialState.value
        }
    },
});

export const { setUserName, setUserPass, clearAll } = userSlice.actions;
export default userSlice.reducer;