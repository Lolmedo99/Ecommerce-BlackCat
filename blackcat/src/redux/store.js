import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import selectedProductReducer from "./cart";
import cartContReducer from "./cartCont";
import loginReducer from "./login";
import productDetailsReducer from "./productDetails";
import productsReducer from "./products";
import tableReducer from "./table";

const store = configureStore({
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    cont: cartContReducer,
    details: productDetailsReducer,
    products: productsReducer,
    selected: selectedProductReducer,
    table: tableReducer,
    login: loginReducer,
  },
});

export default store;
