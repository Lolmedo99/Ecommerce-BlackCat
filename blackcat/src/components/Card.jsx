import React from "react";
import { Link } from "react-router-dom";
import QtySelector from "./QtySelector";

function Card({ product }) {
  return (
    <div class="card">
      <div class="card-image">
        <Link to={`/pedidos/${product.id}`}>
          <figure class="image is-3by3">
            <img
              src={product.photo}
              alt="torta"
              style={{ height: "160px", width: "300px" }}
            />
          </figure>
        </Link>
      </div>
      <div class="card-content  is-align-content-baseline">
        <div class="media">
          <div class="media"></div>
          <div class="media-content">
            <p class="title is-4 has-text-centered">{product.name}</p>
          </div>
        </div>
        <div class="content is-10 has-text-centered is-italic">
          {product.ingredients}
        </div>
        <p class="has-text-centered">${product.price}</p>
      </div>

      {product.stock === 0 ? (
        <div class="card-footer mt-6">
          {" "}
          <p class="has-text-left is-medium is-size-6 m-1">
            No hay stock disponible!
          </p>{" "}
        </div>
      ) : (
        <QtySelector product={product} />
      )}
    </div>
  );
}

export default Card;
