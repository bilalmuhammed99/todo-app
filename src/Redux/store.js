import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer, { todoSlice } from "./TodoSlice";

export const store = configureStore(
    {
        reducer: {
           todoState : todoSliceReducer,
        }
        }
)