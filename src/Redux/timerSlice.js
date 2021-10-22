import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 60
}

export const timerSlice = createSlice({
    name: 'Timer',
    initialState,
    reducers: {
        updateTimer: (state) => {
            --state.count;
        },
        resetTimer: (state) => {
            state.count = 60;
        }
    },
})

export const { updateTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;