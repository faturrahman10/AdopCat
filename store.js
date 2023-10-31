import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./src/features/historySlice";

const store = configureStore({
    reducer : {
        history : historySlice
    }
})

export default store;