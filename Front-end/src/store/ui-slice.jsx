import { createSlice } from "@reduxjs/toolkit";
import { homeData } from "../Data";
export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    value: 0,
    length: homeData.length,
    sideModalIsVisible: false,
    searchModalIsVisible: false,
  },
  reducers: {
    nextSlide(state, action) {
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    dotSlide(state, action) {
      const slide = action.payload;
      state.value = slide;
    },
    toggleSideModal(state) {
      state.sideModalIsVisible = !state.sideModalIsVisible;
    },
    toggleSearchModal(state) {
      state.searchModalIsVisible = !state.searchModalIsVisible;
    },
  },
});
export const uiActions = uiSlice.actions;
