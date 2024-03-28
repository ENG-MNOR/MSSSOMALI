import { createSlice } from "@reduxjs/toolkit";
import competitors from "../../assets/competitors.json";
const initialState = {
  competitors: JSON.parse(window.localStorage.getItem("competitor")) || competitors,
  currentCompetitor: null,
  voteCount: 0,
};
const competitorsSlice = createSlice({
  name: "competitor",
  initialState,
  reducers: {
    setCurrentCompetitor: (state, action) => {
      state.currentCompetitor = action.payload;
      // console.log(action.payload);
    },
    increaseVote: (state) => {
      state.voteCount = state.voteCount + 1;
    },
    decreaseVote: (state) => {
      state.voteCount = state.voteCount - 1;
    },
    addVote: (state, action) => {
      const compIndex = state.competitors.findIndex(
        (comp) => comp.Id === action.payload
      );
      state.competitors[compIndex].NumberofVotes =
        Number(state.competitors[compIndex].NumberofVotes) +
        Number(state.voteCount);
      window.localStorage.setItem(
        "competitor",
        JSON.stringify(state.competitors)
      );
    },
    resetState: (state) => {
      state.currentCompetitor = null;
      state.voteCount = 0;
    },
  },
});
export default competitorsSlice.reducer;
export const {
  setCurrentCompetitor,
  decreaseVote,
  increaseVote,
  addVote,
  resetState,
} = competitorsSlice.actions;
