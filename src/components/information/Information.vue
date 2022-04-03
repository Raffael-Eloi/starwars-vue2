<template>
  <div>
    <Header />
    <div class="body-information">
      <!-- In case of error -->
      <div v-if="errorApi" class="errorAPI">
        <h3 class="center">{{ errorApi }}</h3>
        <h3 class="center">
          <a href="https://swapi.dev/api/" target="_blanket">API link</a>
        </h3>
      </div>

      <!-- normal use -->
      <div class="information" v-else>
        <div class="loading-page" v-if="allData.length === 0">
          <Loading />
        </div>

        <div v-else>
          <h3 class="center">List of {{ paramsName === 'people' ? 'characters' : paramsName }}</h3>
          <ul v-for="item in allData" v-bind:key="item.name">
            <router-link class="router-link" :to="{name: 'details', params:{name:paramsName, id:getIdFromUrl(item.url)}}">
              <li class="list" v-if="paramsName === 'planets'">
                <img
                  src="https://img.icons8.com/external-prettycons-flat-prettycons/36/000000/external-planet-space-prettycons-flat-prettycons-2.png"
                />
                <h4 class="list__description">{{ item.name }}</h4>
              </li>
            </router-link>
            <router-link class="router-link" :to="{name: 'details', params:{name:paramsName, id:getIdFromUrl(item.url)}}">
              <li class="list list-height" v-if="paramsName === 'films'">
                <img src="https://img.icons8.com/color/36/000000/lightsaber.png" />
                <h4 class="list__description">{{ item.title }}</h4>
              </li>
            </router-link>
            <router-link class="router-link" :to="{name: 'details', params:{name:paramsName, id:getIdFromUrl(item.url)}}">
              <li class="list" v-if="paramsName === 'people'">
                <img src="https://img.icons8.com/color/36/000000/darth-vader.png" />
                <h4 class="list__description">{{ item.name }}</h4>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../shared/header/Header.vue";
import Footer from "../shared/footer/Footer.vue";
import Loading from "../shared/loading/Loading.vue";
import { URL } from "../../baseURL/baseURL";
import { getIdFromUrl } from "../../assets/utilities/getIdFromURL";
export default {
  data() {
    return {
      paramsName: this.$route.params.name,
      allData: [],
      URL: URL,
      errorApi: "",
      getIdFromUrl
    };
  },

  components: {
    Header,
    Footer,
    Loading
  },

  created() {
    fetch(`${URL}/${this.paramsName}`)
    .then(response => response.json())
    .then(
      data => this.allData = data.results,
      error => {
        this.errorApi = "Há um problema com a API, por favor, tente mais tarde."
        throw new Error(error)
      })
  }
};
</script>

<style scoped>
.loading-page {
  height: 75vh;
}

.errorAPI {
  height: 75vh;
}

.list {
  display: flex;
  align-items: center;
  transition: 650ms;
}


.list:hover {
 border-radius: 15px;
 background-color: #e6aa14;
}

.list__description {
  margin-left: 1rem;
}

</style>
