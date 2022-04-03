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
          <h3 class="center">Click in one of the items bellow to see the details</h3>
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
        <div class="pagination" v-show="next !== null">
          <router-link v-if="next !== null" class="router-link" :to="{name: 'next-page', params:{name: paramsName, page: getIdFromUrl(next)}}">
            <button class="pagination__button" @click="refreshPage()">Next page</button>
          </router-link>
        </div>
      </div>
    </div>
    {{next}}
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
      paramsPage: this.$route.params.page,
      allData: [],
      URL: URL,
      errorApi: "",
      getIdFromUrl,
      next: [],
    };
  },

  methods: {
    refreshPage() {
    }
  },

  components: {
    Header,
    Footer,
    Loading
  },

  created() {
    fetch(`${URL}/${this.paramsName}${this.paramsPage !== undefined ? `/?page=${this.paramsPage}` : ''}`)
    .then(response => response.json())
    .then(
      data => {
        this.allData = data.results
        this.next = data.next
      },
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
 border-radius: 15px;
}


.list:hover {
 border-radius: 15px;
 background-color: #e6aa14;
}

.list__description {
  margin-left: 1rem;
}

.pagination {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 1rem;
  justify-content: flex-end;
}

.pagination__button {
  border: 1px solid #e6aa14;
  background-color: #e6aa14;
  border-radius: 15px;
  color: #f0f0f0;
  padding: 0.4rem;
  font-size: 1rem;
  font-weight: bold;
  transition: 600ms;
}

.pagination__button:hover {
  cursor: pointer;
  background-color: #b48306;
  box-shadow: 2px 2px 2px gray;
  color: #333;
}

</style>
