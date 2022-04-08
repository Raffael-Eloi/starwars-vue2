<template>
  <div>
    <Header :showMenu="showMenu" :showHiddenMenu="showHiddenMenu" />
    <Transition name="slide-fade">
      <Menu v-show="smallScreenSize && showMenu"/>
    </Transition>
    <div class="initial-message">
      <h1 class="center home-title">Welcome to the star wars info.</h1>
      <h1 class="center home-title">What do you want to see ?</h1>
    </div>
    <div class="list-options">
      <router-link :to="{name: 'information', params: {name: 'planets'}}" class="router-link">
      <div class="planets">
        <img class="image-example" src="../../assets/images/planet-example.jpg" alt="Ilustrative image of a planet in star wars - the planet ilustrated is tatooine">
        <div class="description">
          <h3 class="center">Click anywhere inside this box to see all the planets in the Star wars</h3>
          <img class="image-ilustrative" src="https://img.icons8.com/cotton/64/000000/mars-planet.png"/>
        </div>
      </div>
      </router-link>

      <router-link :to="{name: 'information', params: {name: 'films'}}" class="router-link">
      <div class="films">
        <img class="image-example" src="https://prod-cdn-02.storenvy.com/product_photos/79307239/file_56190258f1_original.jpg" alt="Ilustrative image of a filme in star wars with a lot of characters in the image">
        <div class="description">
          <h3 class="center">Click anywhere inside this box to see all the movies in the Star wars</h3>
          <img class="image-ilustrative" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-movie-movie-theater-flaticons-lineal-color-flat-icons-7.png"/>
        </div>
      </div>
      </router-link>

      <router-link :to="{name: 'information', params: {name: 'people'}}" class="router-link">
      <div class="characters">
        <img class="image-example" src="https://w0.peakpx.com/wallpaper/548/261/HD-wallpaper-darth-vader-star-wars-movies-darth-vader-artwork-artstation.jpg" alt="Ilustrative image of the character Darth Vader">
        <div class="description">
          <h3 class="center">Click anywhere inside this box to see all the characters in the Star wars</h3>
          <img class="image-ilustrative" src="https://img.icons8.com/color/64/000000/r2-d2.png"/>
        </div>
      </div>
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '../shared/header/Header.vue';
import Footer from '../shared/footer/Footer.vue';
import Menu from '../shared/menu/Menu.vue';

export default {
  data() {
    return {
      smallScreenSize: false,
      showMenu: false
    }
  },

  components: {
    Header, Footer, Menu
  },

  methods: {
    showHiddenMenu() {
      this.showMenu = !this.showMenu;
    }
  },

  created() {
    if (window.screen.width < 520) this.smallScreenSize = true;
  }
}
</script>

<style scoped>
.list-options img {
    border-radius: 100%;
  }

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (max-width: 520px) {
  .home-title {
    font-size: 1.3rem;
  }
  
  .list-options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .planets, .films, .characters{
    display: flex;
    border: 4px solid #e6aa14;
    border-radius: 15px;
    padding: 0.5rem;
    height: 215px;
    width: 325px;
    margin-bottom: 1rem;
    transition: 600ms;
  }

  .planets:hover, .films:hover, .characters:hover {
    background-image: url(https://i.pinimg.com/originals/f3/8e/41/f38e413a04321ed0f6b848568ddc2650.jpg);
    background-size: cover;
    background-position: center;
    color: #f0f0f0;
  }
  
  .image-example {
    height: 80%;
    width: 50%;
  }

  .image-example:hover {
    transition: 600ms;
    opacity: 0.3;
  }

  .image-ilustrative {
    margin-left: 30%;
  }
}

@media screen and (min-width: 520px) {
  .home-title {
    font-size: 1.3rem;
  }
  
  .list-options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .planets, .films, .characters {
    display: flex;
    border: 4px solid #e6aa14;
    border-radius: 15px;
    padding: 0.5rem;
    height: 215px;
    width: 325px;
    transition: 600ms;
    margin-bottom: 1rem;
  }
  
  .image-example {
    height: 80%;
    width: 50%;
  }

  .image-ilustrative {
    margin-left: 30%;
  }

  .image-example:hover {
    transition: 600ms;
    opacity: 0.3;
  }

  .planets:hover, .films:hover, .characters:hover {
    background-image: url(https://i.pinimg.com/originals/f3/8e/41/f38e413a04321ed0f6b848568ddc2650.jpg);
    background-size: cover;
    background-position: center;
    color: #f0f0f0;
  }
}
@media screen and (min-width: 1300px) {
  .initial-message {
    margin-top: 3rem;
  }

  .home-title {
    font-size: 1.5rem;
  }

  .list-options {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 65vh;
  }

  .image-example {
    height: 80%;
    width: 55%;
  }

  .image-example:hover {
    transition: 600ms;
    opacity: 0.3;
  }

  .planets, .films, .characters {
    height: 300px;
    width: 400px;
    transition: 600ms;
    border-radius: 15px;
  }

  .planets:hover, .films:hover, .characters:hover {
    background-image: url(https://i.pinimg.com/originals/f3/8e/41/f38e413a04321ed0f6b848568ddc2650.jpg);
    background-size: cover;
    background-position: center;
    color: #f0f0f0;
  }
}

@media screen and (min-width: 1500px) {
  .initial-message {
    margin-top: 3rem;
  }

  .home-title {
    font-size: 1.5rem;
  }
  
  .list-options {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 63.5vh;
  }

  .image-example {
    height: 85%;
    width: 70%;
  }

  .image-example:hover {
    transition: 600ms;
    opacity: 0.3;
  }

  .planets, .films, .characters { 
    height: 400px;
    width: 450px;
    transition: 600ms;
    border-radius: 15px;
  }

  .image-ilustrative {
    margin-top: 90%;
  }

  .planets:hover, .films:hover, .characters:hover {
    background-image: url(https://i.pinimg.com/originals/f3/8e/41/f38e413a04321ed0f6b848568ddc2650.jpg);
    background-size: cover;
    background-position: center;
    color: #f0f0f0;
  }
}
</style>