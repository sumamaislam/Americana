import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request from "../request";
import { setLoading } from "../global";

const initialState = {
  details: {},
  isLoading: false,
};

export const sentslugRequest = createAsyncThunk(
  "detail/sentslugRequest",
  async (payload, thunkAPI) => {
    try {
      let response;
      thunkAPI.dispatch(setLoading(true));
      response = await request
        .get(`product/${payload}`)
        .then((response) => response.data);
      // toast(<RequestMessage message="Message sent successfully!" />);
      return response;
      thunkAPI.dispatch(setLoading(false));
    } catch (error) {
      console.log("Error", error);
      // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
      return null;
    }
  }
);


export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      console.log("HYDRATE", action.payload);
      state.details = action?.payload?.product?.details ? action.payload.product.details : state?.details;
    });
    builder.addCase(sentslugRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sentslugRequest.fulfilled, (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
    });
    builder.addCase(sentslugRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    });
  },
});

export default detailSlice.reducer;
