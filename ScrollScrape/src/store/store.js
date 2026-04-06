import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './uiSlice'
import contentReducer from './contentSlice'




export const store = configureStore({
  reducer: {
    ui: uiReducer,
    content: contentReducer,
  },
})