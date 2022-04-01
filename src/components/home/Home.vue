<template>
  <div>
    <Header />
    <h1 class="center home-title">Welcome to the star wars info, what do you want to see ?</h1>
    <div class="list-options">
      <div class="planets">
        <img src="../../assets/images/planet-example.jpg" alt="">
      </div>
      <div class="films">
        <img src="../../assets/images/film-example.jpg" alt="">
      </div>
      <div class="characters">
        <img src="../../assets/images/character-example.jpg" alt="">
      </div>
    </div>
    <ul v-for="movie in starwarsMovies" v-bind:key="movie.title">
      <li v-if="starwarsMovies">{{movie.title}}</li>
    </ul>
    <!-- <Footer /> -->
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
@media screen and (max-width: 500px) {
  .home-title {
    font-size: 1.5rem;
  }
  
  .list-options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .list-options img {
    height: 180px;
    width: 250px;
    border-radius: 5px;
  }

}

@media screen and (min-width: 1100px) {
  .list-options {
    display: flex;
    justify-content: space-around;
  }
  
  .list-options img {
    height: 250px;
    width: 350px;
    border-radius: 5px;
    /* width: 100%; */
  }
}
</style>