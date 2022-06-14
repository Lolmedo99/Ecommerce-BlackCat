import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLoginRequest } from "../redux/login";
import useInput from "../hooks/useInputs";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useInput();
  const password = useInput();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLoginRequest({ email, password }));
    setLoading(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <>
      <div class="column my-6"></div>
      <div className="layout m-5" color="color2">
        <h3 className="title is-3">Ingresa </h3>
        <form onSubmit={handleSubmit}>
          {/* <div>
            <label className="label my-3">Nombre/s</label>
            <input
              className="input my-3"
              type="text"
              placeholder="Ingrese su nombre"
            />

            <label className="label my-3">Apellido/s</label>
            <input
              className="input my-3"
              type="text"
              placeholder="Ingrese su apellido"
            />
          </div> */}
          <label className="label my-3">Email</label>
          <input
            onChange={email.onChange}
            className="input my-3"
            type="email"
            placeholder="Ej: mar1@hotmail.com"
          />
          <label className="label my-3">Password xOx</label>
          <input
            onChange={password.onChange}
            className="input my-3"
            type="password"
            placeholder="contraseña"
          />
          {loading ? (
            <button className="button is-link my-5 is-loading" type="submit">
              Entrar
            </button>
          ) : (
            <button className="button is-link my-5 " type="submit">
              Entrar
            </button>
          )}
        </form>
      </div>
      <div class="column my-6"></div>
    </>
  );
};

export default Login;
