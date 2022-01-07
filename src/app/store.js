import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter2/counterSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})