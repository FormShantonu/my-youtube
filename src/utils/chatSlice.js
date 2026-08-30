import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
    nextPageToken: null,
    liveChatId: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(LIVE_CHAT_COUNT,1);
      state.message.push(action.payload);
    },
    setMessages: (state, action) => {
      state.message = action.payload;
    },
    setNextPageToken: (state, action) => {
      state.nextPageToken = action.payload;
    },
    setLiveChatId: (state, action) => {
      state.liveChatId = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearChat: (state) => {
      state.message = [];
      state.nextPageToken = null;
      state.error = null;
    },
  },
});

export const {
  addMessage,
  setMessages,
  setNextPageToken,
  setLiveChatId,
  setLoading,
  setError,
  clearChat,
} = chatSlice.actions;
export default chatSlice.reducer;
