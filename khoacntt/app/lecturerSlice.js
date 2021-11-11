import { createSlice } from "@reduxjs/toolkit";
export const lecturerSlice = createSlice({
    name: 'lecturer',
    initialState: {
      currentLecturer: null
    },
    reducers: {
      setCurrentLecturer: (state, action) => {
          state.currentLecturer = action.payload;
      }
    }
  })

export const { setCurrentLecturer } = lecturerSlice.actions;


export default lecturerSlice.reducer;