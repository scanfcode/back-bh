<template>
  <div id="app">
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <a href="#home">
            <li>
              <router-link to="/">Home</router-link>
            </li>
          </a>
          <a href="#about">
            <li>Sobre</li>
          </a>
          <a href="#service">
            <li>Serviços</li>
          </a>
          <a href="#portifolio">
            <li>Portifolio</li>
          </a>
          <a href="#skills">
            <li>Habilidades</li>
          </a>
          <a href="#contact">
            <li>Contatos</li>
          </a>
        </ul>
      </div>
    </nav>
    <div class="navbar">
      <img src="./static/img/logo.png" alt />
      <div class="navigation">
        <ul>
          <li>
            <a href>Modelagem</a>
          </li>
          <li>
            <a href>SQL</a>
          </li>
          <li>
            <a href>Nosql</a>
          </li>
          <li>
            <a href>Nosql</a>
          </li>
        </ul>
      </div>
      <div class="form">
        <form action>
          <input type="search" name id placeholder="Buscar..." />
        </form>
      </div>
    </div>
    <router-view></router-view>

    <div id="footer">
      <footer>
        <!-- <div class="socias-icons"> -->
        <ul>
          <li>
            <a href="https://www.facebook.com/clayton.silvadejesus.1" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Launitweb" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <i class="fab fa-whatsapp-square"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/claytoncsj" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
          </li>
        </ul>
        <a href="https://www.facebook.com/scanfcode/" target="_blank">www.scanfcode.com.br</a>
        <p>&copy;Todos direitos reservados</p>
        <!-- </div> -->
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
nav {
  margin: 0;
}
.navbar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 30px;
  background-color: #000000;
  align-items: center;
}
.navbar img {
  width: 120px;
}
.navbar ul {
  display: flex;
}
.navbar li {
  padding: 0 20px;
}
#footer {
  margin: 0;
  left: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
}

/*  */

form {
  padding: 0 30px;
}
input {
  background-color: rgba(255, 255, 255, 0.527);
  color: 000;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 50px;
  padding: 0px 10px;
}
</style>