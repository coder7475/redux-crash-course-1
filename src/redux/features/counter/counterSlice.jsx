import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            // redux uses Immer for immutability 
            // automatically immutable
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, actions) => {
            state.value = state.value + actions.payload;
        }
    }
})

// export actions as named export as variables
export const { increment, decrement, incrementByValue } = counterSlice.actions;

// export reducer
export default counterSlice.reducer;