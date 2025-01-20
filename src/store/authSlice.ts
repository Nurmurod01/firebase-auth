import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  photoURL: string | null;
  displayName: string | null;
}

const initialState: UserState = {
  email: null,
  photoURL: null,
  displayName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.displayName = action.payload.displayName;
    },
    logout: () => initialState,
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
