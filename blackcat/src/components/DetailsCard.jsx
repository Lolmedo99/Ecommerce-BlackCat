import React, { useEffect } from "react";
import { AiOutlineShop } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { GrCreditCard } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QtySelector from "./QtySelector";
import { getProductDetailsRequest } from "../redux/productDetails";

function DetailsCard() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.details);


  useEffect(() => {
    dispatch(getProductDetailsRequest(productId));
  }, []);

  
  return (
    <>
      <div class="column py-2"></div>
      <div class="column py-6"></div>
      <div class="column is-half is-offset-one-quarter mt-2">
        <div class="box">
          <div class="column is-flex">
            <div class="ml-6">
              <img src={product.photo} alt="torta" />
            </div>
            <div class="ml-6">
              <ul class="title is-3 has-text-weight-light">{product.name}</ul>
              <ul class="title is-2">${product.price}</ul>
              <p class="title is-6 has-text-weight-light is-italic is-underlined ">
                <GrCreditCard />
                VER MEDIOS DE PAGO
              </p>
              <p class="mb-2">
                <AiOutlineShop size={20} />
                <strong>Dirección del local</strong>:Avenida Siempreviva 742
              </p>
              <p class="mb-6 text-is-aling">
                <TbTruckDelivery size={20} />
                <strong>Envío a domicilio</strong>
              </p>
              {product.stock === 0 ? (
                <div class="card-footer p-2">
                  <p class="has-text-left is-medium is-size-6 m-1">
                    No hay stock disponible!
                  </p>
                </div>
              ) : (
                <QtySelector product={product}/>
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="column py-6"></div>
    </>
  );
}

export default DetailsCard;
