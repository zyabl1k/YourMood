import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface isDark {
    value: boolean
}

const initialState: isDark = {
    value: true
}

export const isDarkSlice = createSlice({
    name: "isDark",
    initialState,
    reducers: {
        set: (state: isDark, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    }
});

export const { set} = isDarkSlice.actions;
export default isDarkSlice.reducer;