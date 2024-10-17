import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "@/store/reducers/languageSlice";

const store = configureStore({
    reducer: {
        language: languageSlice,
    }
});

export default store;