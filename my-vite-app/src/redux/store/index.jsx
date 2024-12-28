import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import SpotifySlice from "../slice/SpotifySlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    spotify: SpotifySlice,
  },
});
export default store;
