import { createSlice } from "@reduxjs/toolkit";

const meetingSlice = createSlice({
  name: "meetings",
  initialState:{
    meetings:[]
  },
  reducers: {
    changeMeetings(state, action) {
      state.meetings = action.payload;
    }
  }
})

export const {changeMeetings} = meetingSlice.actions;

export default meetingSlice.reducer; 