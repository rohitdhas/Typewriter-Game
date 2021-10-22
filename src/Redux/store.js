import { configureStore } from '@reduxjs/toolkit'
import statReducer from './statSlice';
import timerSlice from './timerSlice';

export default configureStore({
    reducer: {
        stats: statReducer,
        timer: timerSlice
    },
})