import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../Data";
export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    value: 0,
    length: sliderData.length,
    sideModalIsVisible: false,
    searchModalIsVisible: false,
    navbarIsVisible: true,
    pathbarLinks: [{
      name: "Home",
      link: "/",
    }],
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
    setNavbar(state, action) {
      state.navbarIsVisible = action.payload;
    },
    backInPathbar(state, action) {
      while (state.pathbarLinks[state.pathbarLinks.length - 1].link !== action.payload.link) {
        state.pathbarLinks.pop();
      }
    },
   addToPathbar(state, action) {
      const existingIndex = state.pathbarLinks.findIndex(link => link.link === action.payload.link);
      if (existingIndex !== -1) {
        while (state.pathbarLinks[state.pathbarLinks.length - 1].link !== action.payload.link) {
          state.pathbarLinks.pop();
        }
      } else {
        state.pathbarLinks.push(action.payload);
      }
    },
  },
});
export const uiActions = uiSlice.actions;
