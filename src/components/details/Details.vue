<template>
  <div>
    <Header />
    <div class="loading-page" v-if="detailsData.length === 0">
      <Loading />
    </div>
    <div v-else>
      <div class="show-details">
        <ul v-for="(value, key) in detailsData" v-bind:key="key" class="show-details__list">
          <img v-show="verifyListCondition(key, value)"  src="https://img.icons8.com/windows/36/000000/empire.png"/>
          <div v-show="verifyListCondition(key, value)" class="show-details__list__item">
            <li v-show="verifyListCondition(key, value)" class="show-details__list__key">{{formatKey(key)}}</li>
            <li v-show="verifyListCondition(key, value)" class="show-details__list__item" v-if="arrayOfUrl.includes(key) ? showValuesFormated(value, key) : null">
              <ul v-for="item in allUrlItems" v-bind:key="item.id">
                <li v-show="item.id === key && item.description !== undefined">{{item.description}}</li>
              </ul>
            </li>
            <li v-show="verifyListCondition(key, value)" class="show-details__list__item" v-else
            >{{value}}</li>
          </div>
        </ul>
      </div>
      <div class="search-image">
        <a :href="getNameForSearch(name === 'films' ?  detailsData.title: detailsData.name)" target="_blank" class="search-image__link">
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
import { formatKey } from "../../assets/utilities/formatKey";
import { arrayOfUrl } from "../../assets/utilities/arrayOfUrl";

export default {
  data() {
    return {
      name: this.$route.params.name,
      id: this.$route.params.id,
      detailsData: [],
      getNameForSearch,
      formatKey,
      arrayOfUrl,
      allUrlItems: []
    }
  },
  components: {
    Header, Footer, Loading
  },

  methods: {
    verifyExistenceOfValue(key, value) {
      let isValid = true;
      if (this.allUrlItems.length !== 0) {
        this.allUrlItems.forEach(
          item => {
            if (item.id === key && item.description === value) isValid = false;
          }
        );
        return isValid;
      } else {
        return isValid;
      }
    },

    getValuesFromUrlList(arrayValue, key) {
        if(arrayValue.length !== 0) {
          arrayValue.forEach(
            url => fetch(url)
            .then(response => response.json())
            .then(data => {
              if (data.name !== undefined && this.verifyExistenceOfValue(key, data.name)) {
                this.allUrlItems.push({id: key, description: data.name})
              } else if (this.verifyExistenceOfValue(key, data.title)) {
                this.allUrlItems.push({id: key, description: data.title})
              }
            }) 
          );
          return this.allUrlItems
      }
    },

    showValuesFormated(value, key) {
      if (typeof(value) === "string") {
        const array = [value];
        console.log(array);
        this.getValuesFromUrlList(array, key);

      } else {
        this.getValuesFromUrlList(value, key);

      }
      if (this.allUrlItems.length !== 0) {
        const arrayValueFormated = [];
        this.allUrlItems.forEach(
          item => {
            if (item.id === key && item.description !== undefined) arrayValueFormated.push(item.description)
            }
        );
        return arrayValueFormated;
      }
    },

    verifyListCondition(key, value) {
      let isValid = true;
      if (key === 'url' || key === 'episode_id' || key === 'created' || key === 'edited' || value.length === 0) isValid = false;
      return isValid;
    } 

  },
  created() {
    fetch(`${URL}${this.name}/${this.id}`)
    .then(response => response.json())
    .then(data => this.detailsData = data);
  }
}
</script>

<style scoped>
.loading-page {
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

.show-details__list {
  list-style: none;
  display: flex;
  align-items: flex-start;
}

.show-details__list__item {
  font-size: 1.1rem;
  margin-left: 1rem;
}

.show-details__list__key {
  font-weight: bold;
  margin-left: 1rem;
}

.search-image {
  transition: 600ms;
}
.search-image:hover {
 background-color: #e6aa14;
 cursor: pointer;
}

@media screen and (max-width: 520px) {
  .search-image {
   background-color: #e6aa14;
  }

  .search-image:hover {
    color: #f0f0f0;
  }
}

</style>