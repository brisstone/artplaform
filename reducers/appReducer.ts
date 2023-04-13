import { LiveAuction, LiveTrade, Artist, Artwork } from "./../d";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
export interface AppState {
  artists: { [id: string]: Artist };
  artworks: { [id: string]: Artwork };
  liveAuctions: { [id: string]: LiveAuction };
  liveTrades: { [id: string]: LiveTrade };
}

const initialState: AppState = {
  artists: {},
  artworks: {},
  liveAuctions: {},
  liveTrades: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addArtists: (state, action: PayloadAction<{ [id: string]: Artist }>) => {
      state.artists = action.payload;
    },
    addArtworks: (state, action: PayloadAction<{ [id: string]: Artwork }>) => {
      state.artworks = action.payload;
    },
    setLiveAuctions: (
      state,
      action: PayloadAction<{ [id: string]: LiveAuction }>
    ) => {
      state.liveAuctions = action.payload;
    },
    setLiveTrades: (
      state,
      action: PayloadAction<{ [id: string]: LiveTrade }>
    ) => {
      state.liveTrades = action.payload;
    },
  },
});

export const { addArtists, addArtworks, setLiveAuctions, setLiveTrades } =
  appSlice.actions;
export default appSlice.reducer;
