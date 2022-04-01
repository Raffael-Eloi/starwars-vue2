<template>
  <div>
    <Header />
    <h1 class="center home-title">Welcome to the star wars info, what do you want to see ?</h1>
    <div class="list-options">
      <div class="planets">
        <img class="image-example" src="../../assets/images/planet-example.jpg" alt="Ilustrative image of a planet in star wars - the planet ilustrated is tatooine">
        <div class="description">
          <h3 class="center">Click anywhere inside this box to see all the planets in the Star wars</h3>
          <img class="image-ilustrative" src="https://img.icons8.com/cotton/64/000000/mars-planet.png"/>
        </div>
      </div>
      <div class="films">
        <img class="image-example" src="../../assets/images/film-example.jpg" alt="Ilustrative image of a filme in star wars with a lot of characters in the image">
        <div class="description">
          <h3 class="center">Click anywhere inside this box to see all the movies in the Star wars</h3>
          <img class="image-ilustrative" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-movie-movie-theater-flaticons-lineal-color-flat-icons-7.png"/>
        </div>
      </div>
      <div class="characters">
        <img class="image-example" src="../../assets/images/character-example.jpg" alt="Ilustrative image of the character Darth Vader">
        <div class="description">
          <h3 class="center">Click anywhere inside this box to see all the characters in the Star wars</h3>
          <img class="image-ilustrative" src="https://img.icons8.com/color/64/000000/r2-d2.png"/>
        </div>
      </div>
    </div>
    <!-- <ul v-for="movie in starwarsMovies" v-bind:key="movie.title">
      <li v-if="starwarsMovies">{{movie.title}}</li>
    </ul> -->
    <Footer />
  </div>
</template>

<script>
  import Header from '../shared/header/Header.vue';
  import Footer from '../shared/footer/Footer.vue';
export default {
  data() {
    return {
      starwarsMovies: []
    }
  },
  components: {
    Header, Footer
  },
  created() {
      fetch('https://swapi.dev/api/films')
      .then(response => response.json())
      .then(data => this.starwarsMovies = data.results)
    }
  }
</script>

<style scoped>
.list-options img {
    border-radius: 5px;
  }
@media screen and (max-width: 500px) {
  .home-title {
    font-size: 1.5rem;
  }
  
  .list-options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .planets {
    display: flex;
    border: 4px solid #e6aa14;
    border-radius: 5px;
    padding: 0.5rem;
    height: 200px;
    width: 350px;
    margin-bottom: 1rem;
  }
  
  .image-example {
    height: 100%;
    width: 50%;
  }

  .image-ilustrative {
    margin-left: 30%;
  }

  .films {
    display: flex;
    border: 4px solid #e6aa14;
    border-radius: 5px;
    padding: 0.5rem;
    height: 200px;
    width: 350px;
    margin-bottom: 1rem;
  }

  .characters {
    display: flex;
    border: 4px solid #e6aa14;
    border-radius: 5px;
    padding: 0.5rem;
    height: 200px;
    width: 350px;
    margin-bottom: 1rem;
  }

}

@media screen and (min-width: 1100px) {
  .list-options {
    display: flex;
    justify-content: space-around;
  }
}
</style>