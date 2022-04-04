<template>
  <div class="credits">
    <Header />
    <div class="credits-body">
      <h2 class="credits-body__title center">Credits of the project</h2>
      <h4 class="credits-body__description">
        For all the icons of the project I used the website <a href="https://icons8.com/">icons8</a>.
      </h4>
      <h4 class="credits-body__description">
        For the API of the project I used the website <a href="https://swapi.dev/">swapi dev</a>.
      </h4>
      <div class="credits-body__image">
        <img src="https://img.icons8.com/external-line-rakhmat-setiawan/100/000000/external-communication-thanksgiving-line-line-rakhmat-setiawan.png"/>
      </div>
    </div>
    <BackToHome />
    <Footer />
  </div>
</template>

<script>
import Header from '../shared/header/Header.vue';
import Footer from '../shared/footer/Footer.vue';
import BackToHome from '../shared/backtohome/BackToHome.vue';

export default {
  components: {
    Header, Footer, BackToHome
  }
}
</script>

<style  scoped>
.credits-body {
  height: 75vh;
}

.credits-body__description {
  margin-left: 2rem;
}

.credits-body__image {
  display: flex;
  align-content: center;
  justify-content: center;
}

@media screen and (min-width: 1400px) {
  .credits-body__title {
    font-size: 2rem;
  }

  .credits-body__description {
    font-size: 1.3rem;
  }
}

</style>