import { createApi,createSlice } from '@reduxjs/toolkit/query';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase(state){
            return state+1;
        },
        decrease(state){
            return state-1;
        },
    },
});

const {action, reducers} = counterSlice;
export  const {increase, decrease} = action;
