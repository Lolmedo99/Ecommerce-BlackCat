import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

let arrProducts = [];

export const getTableRequest = createAsyncThunk("TABLE", async (id) => {
  const response = await axios.get(
    `http://localhost:3001/api/products/get/${id}`
  );
  arrProducts = [...arrProducts, response.data];
  const res = arrProducts;
  return res;
});

export const cleanTableRequest = createAsyncThunk("CLEAR_TABLE", () => {
  arrProducts = [];
  return arrProducts;
});

const tableReducer = createReducer([], {
  [cleanTableRequest.fulfilled]: (state, action) => action.payload,
  [getTableRequest.fulfilled]: (state, action) => action.payload,
});

export default tableReducer;

//arrProducts = [...arrProducts, res.data];

// export const getTableRequest = createAsyncThunk("TABLE", (id) => {
//   return axios
//     .get(`http://localhost:3001/api/products/get/${id}`)
//     .then((res) => (arrProducts = [...arrProducts, res.data]))
//     .then((res) => res);
// });
