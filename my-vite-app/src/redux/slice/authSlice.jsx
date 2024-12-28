import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appConfig from "../../config/appconfig";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async (data) => {
  const response = await axios.post(appConfig.Auth.LOGIN_URL, data);
  localStorage.setItem("accessToken", response.data.accessToken);
  return response.data;
});
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (data) => {
    console.log(data);
    const response = await axios.post(appConfig.Auth.refreshTokenURL, data);

    return response.data;
  }
);

const initialState = {
  user: null,
  status: "idle", // idle | loading | succeeded | failed
  error: null, // Lưu lỗi nếu yêu cầu thất bại
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Trạng thái pending
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // Trạng thái fulfilled
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.user = action.payload;
      })
      // Trạng thái rejected
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; // Lưu lỗi
      })
      // Xử lý refreshToken
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
