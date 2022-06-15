import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const postLoginRequest = createAsyncThunk(
  "LOGIN",
  async ({ email, password }) => {
    const response = await axios.post("http://localhost:3001/api/users/login", {
      email: email.value,
      password: password.value,
    });
    const user = await response;
    const userData = await {
      name: user.data.name,
      id: user.data.id,
      email: user.data.email,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
  }
);

export const postLogoutRequest = createAsyncThunk("LOGOUT", async () => {
  try {
    const response = await axios.post("http://localhost:3001/api/users/logout");
    await response.data;
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

// export const postMeRequest = createAsyncThunk("ME", () => {
//   return axios
//     .get("http://localhost:3001/api/users/me")
//     .then((res) => console.log("ACA RES DATA", res.data))
//     .catch((err) => {
//       console.log(err);
//     });
// });

const loginReducer = createReducer(
  {},
  {
    //   [postMeRequest.fulfilled]: (state, action) => action.payload,
    [postLoginRequest.fulfilled]: (state, action) => action.payload,
    [postLogoutRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default loginReducer;

// export const postLoginRequest = createAsyncThunk(
//   "LOGIN",
//   ({ email, password }) => {
//     return axios
//       .post("http://localhost:3001/api/users/login", {
//         email: email.value,
//         password: password.value,
//       })
//       .then((res) => {
//         localStorage.setItem("user", JSON.stringify(res.data));
//         return res.data;
//       });
//   }
// );
