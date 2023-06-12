import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import {
  deleteTuitThunk,
  findTuitsThunk,
  createTuitThunk,
  updateTuitThunk,
} from "../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "bootstrap.png",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
  title: "New tuit",
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload };
    },
  },
  reducers: {
    // deleteTuit(state, action) {
    //   const index = state.tuits.findIndex(
    //     (tuit) => tuit._id === action.payload
    //   );
    //   state.tuits.splice(index, 1);
    // },
    // createTuit(state, action) {
    //   if (action.payload.tuit) {
    //     state.tuits.unshift({
    //       ...action.payload,
    //       ...templateTuit,
    //       _id: new Date().getTime(),
    //     });
    //   }
    // },
    // likeToggle(state, action) {
    //   const tuit = state.tuits.find((tuit) => tuit._id === action.payload._id);
    //   tuit.liked = !tuit.liked;
    //   if (tuit.likes > 0) {
    //     tuit.likes = tuit.liked ? tuit.likes + 1 : tuit.likes - 1;
    //   }
    //   if ((tuit.likes === 0) & tuit.liked) {
    //     tuit.likes = tuit.likes + 1;
    //   }
    // },
  },
});

export const { createTuit, likeToggle, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
