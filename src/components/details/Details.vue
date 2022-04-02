<template>
  <div>
    <Header />
    <div class="loading" v-if="detailsData.length === 0">
      <Loading />
    </div>
    <div v-else>
      {{detailsData}}
      <div class="search-image">
        <a :href="getNameForSearch(detailsData.name)" target="_blank" class="search-image__link">
        <div class="search-image__box">
          <h4>Click here to see images of {{detailsData.name}}</h4>
          <img src="https://img.icons8.com/color/36/000000/death-star.png"/>
          <img src="https://img.icons8.com/fluency/36/000000/image.png"/>
        </div>
        </a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../shared/header/Header.vue';
import Footer from '../shared/footer/Footer.vue';
import Loading from "../shared/loading/Loading.vue";
import { URL } from "../../baseURL/baseURL";
import { getNameForSearch } from  "../../baseURL/baseURLSearch";

export default {
  data() {
    return {
      name: this.$route.params.name,
      id: this.$route.params.id,
      detailsData: [],
      getNameForSearch,
    }
  },
  components: {
    Header, Footer, Loading
  },
  created() {
    fetch(`${URL}${this.name}/${this.id}`)
    .then(response => response.json())
    .then(data => this.detailsData = data);
  }
}
</script>

<style scoped>
.loading {
  height: 75vh;
}

.search-image {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e6aa14;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.search-image__link {
  text-decoration: none;
  color: inherit;
}

.search-image__box {
  display: flex;
  align-items: center;
}

</style>