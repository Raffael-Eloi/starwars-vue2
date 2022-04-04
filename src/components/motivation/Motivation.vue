<template>
  <div class="credits">
    <Header :showMenu="showMenu" :showHiddenMenu="showHiddenMenu"/>
    <Menu v-show="smallScreenSize && showMenu"/>
    <div class="credits-body">
      <h2 class="credits-body__title center">Motivation of the project</h2>
      <h4 class="credits-body__description">
        The motivation was the practise of the skills learned on Vue.js, so I needed to apply the concepts on small but real project. <br />
        The initial idea was just build an application that I could use an existent API to list things and to use methods, components, and resources of the Vue.js and resources os css like reponsiviness, position, flexbox, alignment and others.<br />
      </h4>
      <div class="credits-body__image">
        <img class="credits-body__image__item" src="https://img.icons8.com/fluency/150/000000/laptop-coding.png"/>
        <img class="credits-body__image__item" src="https://img.icons8.com/color/100/000000/vue-js.png"/>
      </div>
    </div>
    <BackToHome />
    <Footer />
  </div>
</template>

<script>
import Header from '../shared/header/Header.vue';
import Footer from '../shared/footer/Footer.vue';
import Menu from '../shared/menu/Menu.vue';
import BackToHome from '../shared/backtohome/BackToHome.vue';

export default {
  data() {
    return {
      smallScreenSize: false,
      showMenu: false
    }
  },

  components: {
    Header, Footer, Menu, BackToHome
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