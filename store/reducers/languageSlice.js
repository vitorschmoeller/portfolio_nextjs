import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        isPortuguese: false
    },
    reducers: {
        handlePortuguese: (state) => {
            state.isPortuguese = true;
        },
        handleEnglish: (state) => {
            state.isPortuguese = false;
        }
    }
});

export const { handleEnglish, handlePortuguese } = languageSlice.actions;

export default languageSlice.reducer;