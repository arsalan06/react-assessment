import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserApiResponse } from "../utils/userInterface";
import { dispatch } from "./store";

interface CounterState {
  userList: UserApiResponse;
}

const initialState: CounterState = {
  userList: { results: [] },
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllUserList(state, action) {
      console.log("action")
      console.log("action")
      console.log(action.payload)
      state.userList.results = action.payload.results;
    },
    // Add other reducers as needed
  },
});

export default slice.reducer;
export function getAllUserAction() {
  return async () => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=5000`);
      dispatch(slice.actions.getAllUserList(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
