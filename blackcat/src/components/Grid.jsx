import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsRequest } from "../redux/products";
import Card from "./Card";

function Grid() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);


  return (
    <>
      <div>
        <div class="column py-2"></div>
        <div class="column py-6"></div>
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class="columns is-multiline">
            {products.map((product) => (
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
