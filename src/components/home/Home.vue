<template>
  <div>
    <Header />
    <ul v-for="movie in starwarsMovies" v-bind:key="movie.title">
      <li>{{movie}}</li>
    </ul>
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

</style>