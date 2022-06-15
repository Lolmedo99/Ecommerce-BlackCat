import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "../redux/products";
import Card from "./Card";

function Grid() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);


  return (
    <>
      <div>
        <div class="column py-5"></div>
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class="columns is-multiline">
            <div class="column is-full">
              <section class="hero has-background-color1">
                <div class="column is-6 is-offset-3">
                  <input
                    class="input"
                    type="text"
                    placeholder="Buscar..."
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
                  />
                </div>
              </section>
            </div>
            {products
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((product) => (
                <>
                  <div class="column is-one-quarter is-3 ">
                    <Card product={product} key={product.id} id={product.id} />
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
