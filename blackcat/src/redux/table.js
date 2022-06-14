import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

let arrProducts = [];

export const getTableRequest = createAsyncThunk("TABLE", (id) => {
  return axios
    .get(`http://localhost:3001/api/products/get/${id}`)
    .then((res) => (arrProducts = [...arrProducts, res.data]))
    .then((res) => res);
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
