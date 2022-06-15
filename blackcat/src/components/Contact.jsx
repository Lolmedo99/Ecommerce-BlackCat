import React from "react";

const Contact = () => {
  return (
    <>
      <div class="column is-4 is-offset-4">
        <div class="column mt-2"></div>
        <div class="column is-6 is-offset-3">
          <picture class="image">
            <img
              class="mb-1"
              src="https://i.postimg.cc/sxTxGF1s/Blackcat-Logo/.png"
              alt="Logo"
            />
          </picture>
        </div>
        <div className="layout m-5" color="color2">
          <form>
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" />
              </div>
            </div>
            <div class="field">
              <label class="label">Teléfono</label>
              <div class="control">
                <input class="input" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">Mensaje</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Escriba aquí su mensaje o consulta"
                ></textarea>
              </div>
            </div>
            <button class="button is-black is-pulled-right mb-6">ENVIAR</button>
          </form>
        </div>
      </div>
      <div class="column my-6"></div>
    </>
  );
};

export default Contact;
