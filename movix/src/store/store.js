import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice'
export const store = configureStore({
  reducer: {
    // redux: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    home:homeSlice,
  },
})