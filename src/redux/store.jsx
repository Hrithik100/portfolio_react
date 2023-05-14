import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themeSlice";


export const store = configureStore({
    reducer: {
        darkMode: themeSlice,
    },
});