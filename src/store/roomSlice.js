import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = roomSlice.actions;

export default roomSlice.reducer;
