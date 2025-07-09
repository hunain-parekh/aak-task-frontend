import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User } from "../../types/auth.type";
import type { RootState } from "../../app/store";

interface AuthState {
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
