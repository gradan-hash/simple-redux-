import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "mzee",
      email: "cornelius@gmail.com",
    },
    pending: null,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = null;
    },
    remove: state=> (state = {}),
  },
});
export const { updateStart, updateSuccess, updateError } =
  userSlice.actions;
export default userSlice.reducer;
