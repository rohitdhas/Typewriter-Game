import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    errorCount: 0,
    scoreData: [],
    wpm: 0
}

export const statSlice = createSlice({
    name: 'Stats',
    initialState,
    reducers: {
        updateErrors: (state, action) => {
            state.errorCount = action.payload;
        },
        updateScores: (state, action) => {
            state.scoreData.push(action.payload);
        },
        updateWPM: (state, action) => {
            state.wpm = action.payload;
        },
        resetStatsAndUpdateScore: (state, action) => {
            state.scoreData.push(action.payload);
            state.errorCount = 0;
            state.wpm = 0;
        }
    },
})

export const { updateErrors, updateScores, updateWPM, resetStatsAndUpdateScore } = statSlice.actions;
export default statSlice.reducer;