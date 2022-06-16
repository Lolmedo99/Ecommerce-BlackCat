import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const postLoginRequest = createAsyncThunk(
  "LOGIN",
  ({ email, password }) => {
    return axios
      .post("http://localhost:3001/api/users/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        const user = {
          id: res.data.id,
          name: res.data.name,
          admin: res.data.admin,
        };
        localStorage.setItem("user", JSON.stringify(user));
        return res.data;
      });
  }
);
export const postLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios
    .post("http://localhost:3001/api/users/logout")
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
});

export const postMeRequest = createAsyncThunk("ME", () => {
  return axios
    .get("http://localhost:3001/api/users/me")
    .then((res) => console.log("ACA RES DATA", res.data))
    .catch((err) => {
      console.log(err);
    });
});

const loginReducer = createReducer(
  {},
  {
    [postMeRequest.fulfilled]: (state, action) => action.payload,
    [postLoginRequest.fulfilled]: (state, action) => action.payload,
    [postLogoutRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default loginReducer;
