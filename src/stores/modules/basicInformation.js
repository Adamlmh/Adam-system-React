import { createSlice } from "@reduxjs/toolkit";

const basicInformationSlice = createSlice({
  name: "basicInformation",
  initialState: {
    data:{}
  },
  reducers: {
    changeBasicInformation: (state, action) => {
      state.data = action.payload;
    }
  },
})

export const { changeBasicInformation } = basicInformationSlice.actions;

export default basicInformationSlice.reducer;