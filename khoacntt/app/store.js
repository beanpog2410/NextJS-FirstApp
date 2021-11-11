import { configureStore } from '@reduxjs/toolkit';
import lecturerSlice from './lecturerSlice';
import postReducer from './postSlice';
import recruitmentReducer from './recruitmentSlice';


export const store = configureStore({
  reducer: {
    posts: postReducer,
    recruitments: recruitmentReducer,
    lecturer: lecturerSlice
  },
})