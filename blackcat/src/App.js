import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Corporate from "./components/Corporate";
import DetailsCard from "./components/DetailsCard";
import Table from "./components/Table";
import NewUser from "./components/NewUser";
import Login from "./components/Login";
import { getSelectedProductsRequest } from "./redux/cart";
<<<<<<< HEAD
//import { postMeRequest } from "./redux/login";
=======
import { postMeRequest } from "./redux/login";
import Contact from "./components/Contact";
>>>>>>> 6530b7e129eebbf6e55d7ec77e24ea32d52858e8
import Checkout from "./components/Checkout";
import UsersList from "./components/UsersList";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    window.scrollTo(0, 0);
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/users_list" element={<UsersList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
