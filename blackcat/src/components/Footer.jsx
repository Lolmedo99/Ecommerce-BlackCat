import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { SiMaildotru } from "react-icons/si";
import { FaCcMastercard, FaCcVisa,FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer has-background-color1">
      <div class="columns is-multiline">
        <div class="column">
          <strong>NAVEGACIÓN</strong>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Empresariales</li>
          <li>Contacto</li>
          <li>Preguntas frecuentes</li>
        </div>
        <div class="column">
          <strong>MEDIOS DE PAGO</strong>
          <ul>
          <FaCcVisa size={20}/>
          </ul>
          <ul>
          <FaCcMastercard size={20}/>
          </ul>
          <ul>
            <img alt="mercado pago"></img>
          </ul>
          <ul>
            <img alt="pago fácil"></img>
          </ul>
          <ul>
            <img alt="banelco"></img>
          </ul>
        </div>
        <div class="column">
          <strong>CONTACTANOS</strong>
          <li>{<BiPhoneCall />}1137637336</li>
          <li>{<SiMaildotru />}blackcat@gmail.com</li>
          <li>{<FaMapMarkerAlt />}Avenida Siempreviva 742</li>
        </div>
        <div class="column">
          <strong>REDES SOCIALES</strong>
          <div>
            <a
              href="https://www.facebook.com/zuck"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/leomessi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
