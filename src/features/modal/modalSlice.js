import { createSlice } from "@reduxjs/toolkit";
const initialState = { isopen: false };
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModale: (state) => {
      state.isopen = !state.isopen;
    },
  },
});
console.log(modalSlice);
export default modalSlice.reducer;
export const { handleModale } = modalSlice.actions;
