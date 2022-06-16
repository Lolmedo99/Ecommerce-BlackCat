import React from "react";
import axios from "axios";
import useInput from "../hooks/useInputs";
import { useNavigate } from "react-router";

function NewProduct() {
  const navigate = useNavigate();
  const [Notif, setNotif] = useState(false);

  const name = useInput();
  const price = useInput();
  const stock = useInput();
  const description = useInput();
  const ingredients = useInput();
  const review = useInput();
  const categories = useInput();
  const photo = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/products/add", {
      name: name.value,
      price: price.value,
      stock: stock.value,
      description: description.value,
      ingredients: ingredients.value,
      review: review.value,
      categories: categories.value,
      photo: photo.value,
    });
    setTimeout(() => navigate("/pedidos"), 500);
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  };

  return (
    <>
      <div class="column my-4"></div>
      <div class="column is-4 is-offset-4">
        <div className="layout m-5" color="color2">
          <h3 class="title has-text-centered">
            Ingrese los datos de el nuevo producto{" "}
          </h3>
          {Notif ? (
            <div class="notification is-success">
              <button class="delete" onClick={() => setNotif(false)}></button>
              El producto se editó <strong>correctamente</strong>.
            </div>
          ) : (
            ""
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label my-3">Nombre</label>
              <input
                onChange={name.onChange}
                className="input my-3"
                type="text"
                placeholder="Ingrese su nombre"
              />
              <label className="label my-3">Precio</label>
              <input
                onChange={price.onChange}
                className="input my-3"
                type="text"
                placeholder="el precio aqui"
              />
              <label className="label my-3">Stock</label>
              <input
                onChange={stock.onChange}
                className="input my-3"
                type="text"
                placeholder="stock"
              />
            </div>
            <label className="label my-3">Description</label>
            <input
              onChange={description.onChange}
              className="input my-3"
              type="text"
              placeholder="descripción"
            />
            {/* <label className="label my-3">Ingredientes</label>
            <input
              onChange={ingredients.onChange}
              className="input my-3"
              type="text"
              placeholder="ingredientes"
            /> */}
            <div class="field">
              <label class="label">Ingredientes</label>
              <div class="control">
                <textarea
                  onChange={ingredients.onChange}
                  class="textarea"
                  placeholder="ingredientes"
                ></textarea>
              </div>
            </div>
            <label className="label my-3">Review</label>
            <input
              onChange={review.onChange}
              className="input my-3"
              type="text"
              placeholder=" breve review"
            />
            <label className="label my-3">Categorias</label>
            <input
              onChange={categories.onChange}
              className="input my-3"
              type="text"
              placeholder="¿que tipo de producto es?"
            />
            <label className="label my-3">fotos</label>
            <input
              onChange={photo.onChange}
              className="input my-3"
              type="text"
              placeholder="URL de la foto "
            />

            {/* ESTO COMENTADO ES PARA EL BOTON DE SUBIR UN ARCHIVO DESDE ARCHIVOS DE TU EQUIPO
             <label className="label my-3">Imagen principal</label>
            <br />
            <div class="file is-normal">
              <label class="file-label">
                <input onChange={photo.onChange} class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Adjuntar imagen aqui</span>
                </span>
              </label>
            </div> */}

            <button
              class="button is-black is-pulled-right"
              type="submit"
              onClick={() => setNotif(true)}
            >
              Listo!
            </button>
          </form>
        </div>
      </div>
      <div class="column my-4"></div>
    </>
  );
}

export default NewProduct;