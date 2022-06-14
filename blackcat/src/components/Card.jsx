import React from "react";
import { Link } from "react-router-dom";
import QtySelector from "./QtySelector";

function Card({ product }) {

  return (
    <div class="card">
      <div class="card-image">
        <Link to={`/pedidos/${product.id}`}>
          <figure class="image is-4by4">
            <img src={product.photo} alt="torta" />
          </figure>
        </Link>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media"></div>
          <div class="media-content">
            <p class="title is-4 has-text-centered">{product.name}</p>
          </div>
        </div>
        <div class="content is-10 has-text-centered is-italic">
          {product.description}
        </div>
        <p class="has-text-centered">${product.price}</p>
      </div>
      {product.stock === 0 ? (
        <div class="card-footer p-2">
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
