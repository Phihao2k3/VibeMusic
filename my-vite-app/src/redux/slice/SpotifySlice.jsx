import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
export const SearchTrack = createAsyncThunk(
  "spotify/searchTrack",
  async (data, { rejectWithValue }) => {
    const spotifyApi = new SpotifyWebApi({
      clientId: "0e42ca6f41894f6389c40a0ee693feb2",
    });

    const accessToken = localStorage.getItem("accessToken");

    // Kiểm tra nếu không có accessToken
    if (!accessToken) {
      return rejectWithValue("Access token is missing. Please log in.");
    }

    try {
      spotifyApi.setAccessToken(accessToken);
      const response = await spotifyApi.searchTracks(data.query, {
        limit: 50,
        offset: 1,
      });
      return response.body;
    } catch (error) {
      // Kiểm tra lỗi cụ thể và trả về
      if (error.statusCode === 401) {
        return rejectWithValue(
          "Invalid or expired access token. Please log in."
        );
      }
      return rejectWithValue(
        error.message || "An error occurred while searching for tracks."
      );
    }
  }
);
export const getnewReleases = createAsyncThunk(
  "spotify/getnewReleases",
  async (data, { rejectWithValue }) => {
    const spotifyApi = new SpotifyWebApi({
      clientId: "0e42ca6f41894f6389c40a0ee693feb2",
    });

    const accessToken = localStorage.getItem("accessToken");

    // Kiểm tra nếu không có accessToken
    if (!accessToken) {
      return rejectWithValue("Access token is missing. Please log in.");
    }

    try {
      spotifyApi.setAccessToken(accessToken);
      const response = await spotifyApi.getNewReleases({ limit: 50 });
      return response.body;
    } catch (error) {
      // Kiểm tra lỗi cụ thể và trả về
      if (error.statusCode === 401) {
        return rejectWithValue(
          "Invalid or expired access token. Please log in."
        );
      }
      return rejectWithValue(
        error.message || "An error occurred while searching for tracks."
      );
    }
  }
);
export const searchAlbum = createAsyncThunk(
  "spotify/searchAlbum",
  async (data, { rejectWithValue }) => {
    const spotifyApi = new SpotifyWebApi({
      clientId: "0e42ca6f41894f6389c40a0ee693feb2",
    });
    console.log(data.query);

    const accessToken = localStorage.getItem("accessToken");

    // Kiểm tra nếu không có accessToken
    if (!accessToken) {
      return rejectWithValue("Access token is missing. Please log in.");
    }

    try {
      spotifyApi.setAccessToken(accessToken);
      const response = await spotifyApi.searchAlbums(data.query.query);
      return response.body;
    } catch (error) {
      // Kiểm tra lỗi cụ thể và trả về
      if (error.statusCode === 401) {
        return rejectWithValue(
          "Invalid or expired access token. Please log in."
        );
      }
      return rejectWithValue(
        error.message || "An error occurred while searching for albums."
      );
    }
  }
);
export const getcurrentPlaying = createAsyncThunk(
  "spotify/getcurrentPlaying",
  async (data, { rejectWithValue }) => {
    const spotifyApi = new SpotifyWebApi({
      clientId: "0e42ca6f41894f6389c40a0ee693feb2",
    });
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      return rejectWithValue("Access token is missing. Please log in.");
    }
    try {
      spotifyApi.setAccessToken(accessToken);
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return response.body;
    } catch (error) {
      // Kiểm tra lỗi cụ thể và trả về
      if (error.statusCode === 401) {
        return rejectWithValue(
          "Invalid or expired access token. Please log in."
        );
      }
      return rejectWithValue(
        error.message || "An error occurred while searching for tracks."
      );
    }
  }
);
const initialState = {
  tracks: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null, // Lưu lỗi nếu yêu cầu thất bại
};
const SpotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    clearTracks: (state) => {
      state.tracks = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SearchTrack.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(SearchTrack.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tracks = action.payload.tracks.items;
      })
      .addCase(SearchTrack.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getnewReleases.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getnewReleases.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tracks = action.payload.albums.items;
      })
      .addCase(getnewReleases.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(searchAlbum.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchAlbum.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tracks = action.payload.albums.items;
      })
      .addCase(searchAlbum.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getcurrentPlaying.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getcurrentPlaying.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tracks = action.payload;
      })
      .addCase(getcurrentPlaying.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { clearTracks } = SpotifySlice.actions;
export default SpotifySlice.reducer;
