import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Corporate from "./components/Corporate";
import CartGrid from "./components/CartGrid";
import DetailsCard from "./components/DetailsCard";
import Table from "./components/Table";
import NewUser from "./components/NewUser";
import Login from "./components/Login";
import { getSelectedProductsRequest } from "./redux/cart";
//import { postMeRequest } from "./redux/login";
import Checkout from "./components/Checkout";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
    //dispatch(postMeRequest());
    cart.forEach((element) => {
      dispatch(
        getSelectedProductsRequest({
          productId: element.productId,
          amount: element.amount,
          productPrice: element.productPrice,
        })
      );
    });
  }, []);

  let arrCart = useSelector((state) => state.selected);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Grid />} />
        <Route path="/pedidos/:productId" element={<DetailsCard />} />
        <Route path="/empresariales" element={<Corporate />} />
        <Route
          path="/carrito"
          element={
            <>
              <Table />
            </>
          }
        />
        <Route path="/singup" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
