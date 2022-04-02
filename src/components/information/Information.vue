<template>
  <div>
    <Header />

    <div class="body-information">
    <!-- In case of error -->
    <h3 v-if="errorApi" class="center">{{errorApi}}</h3>
    <h3 v-if="errorApi" class="center"><a href="https://swapi.dev/api/" target="_blanket">API link</a></h3>

    <!-- normal use -->
    <div class="information" v-else>
      <h3 class="center">List of {{ paramsName }}</h3>
    </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../shared/header/Header.vue';
import Footer from '../shared/footer/Footer.vue';
import { URL } from '../../baseURL/baseURL';
export default {
  data() {
    return {
      paramsName: this.$route.params.name,
      allData: [],
      URL: URL,
      errorApi: ''
    }
  },

  components: {
    Header, Footer
  },

  created() {
    fetch(`${URL}/${this.paramsName}`)
    .then(response => response.json())
    .then(
      data => console.log(data),
      error => {
        this.errorApi = "Há um problema com a API, por favor, tente mais tarde."
        throw new Error(error)
      })
  }
}
</script>

<style scoped>
.body-information {
  height: 75vh;
}
</style>