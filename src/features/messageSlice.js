import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChatHistory = createAsyncThunk(
  "messages/fetchChatHistory",
  async ({ senderId, receiverId }) => {
    const response = await axios.get(
      `/api/messages/history/${senderId}/${receiverId}`
    );
    return response.data;
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    chatHistory: [],
    loading: false,
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.chatHistory.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChatHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.chatHistory = action.payload;
      })
      .addCase(fetchChatHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
