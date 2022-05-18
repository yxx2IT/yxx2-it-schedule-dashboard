import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // for active or available users
  active: [],
  //for active users on wed
  dyads: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    activate: (state, action) => {
      state.active = action.payload;
    },
    deaActivate: (state, action) => {
      state.active = [];
    },
    setDyads: (state, action) => {
      state.dyads = action.payload;
    },
    unsetDyads: (state, action) => {
      state.dyads = [];
    },
  },
});

export const { activate, deaActivate, setDyads, unsetDyads } =
  userSlice.actions;

// The function below is called a selector and allows us to select a value from the state. or send export the state value
export const selectActive = (state) => state.user.active;
export const selectDyads = (state) => state.user.dyads;

export default userSlice.reducer;
