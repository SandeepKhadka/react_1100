import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAutheticated: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const { email, password } = action.payload;
      state.user = { email, password };
      state.error = null;
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      if (
        state.user &&
        state.user.email === email &&
        state.user.password === password
      ) {
        state.isAutheticated = true;
        state.error = null;
      } else {
        state.error = "Invalid email or password";
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAutheticated = false;
    },
  },
});

export const { signUp, login, logout } = userSlice.actions;

export default userSlice.reducer;
