import React from "react";



function Home() {

  return (
    <div class="columns p-6">
      <div class="column p-6">
        <article class="message p-6 m-6 has-text-centered">
          <div class="message-header is-flex is-justify-content-center">
            <p class="is-size-4">BIENVENIDOS A BLACKCAT BAKERY</p>
          </div>
          <div class="message-body is-size-6">
            Somos especialistas en Chocotorta con{" "}
            <strong>MUCHAS ALMENDRAS!!!</strong>
          </div>
          <img src="https://images-ext-1.discordapp.net/external/p8yuQL3NlwxkzO0akFs6HfSLOyvPK8OMWtqQwLgETcs/https/www.hogarmania.com/archivos/201112/tarta-de-almendra-al-cafe-668x400x80xX.jpg"></img>
        </article>
      </div>
    </div>
  );
}

export default Home;
