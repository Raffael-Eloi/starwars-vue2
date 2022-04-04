<template>
  <div class="about">
    <Header :showMenu="showMenu" :showHiddenMenu="showHiddenMenu" />
    <Menu v-show="smallScreenSize && showMenu"/>
    <div class="about-body">
      <img class="about-body__image"  src="../../assets/images/me.jpeg" alt="Image of me with a seated on the chair using a headset">
      <div class="about-body__description">
        <h1 class="about-body__title center">Hello guys, I'm Raffael Eloi</h1>
        <ul class="about-body__list">
          <div class="about-body__list__item"> 
            <img class="about-body__list__image" src="https://img.icons8.com/windows/36/000000/phoenix-squadron.png"/>
            <li>I'm coursing computer science at CEULP/ULBRA</li>
          </div>
          <div class="about-body__list__item"> 
            <img class="about-body__list__image" src="https://img.icons8.com/windows/36/000000/phoenix-squadron.png"/>
            <li>I work as a Full Stack Web Developer</li>
          </div>
          <div class="about-body__list__item"> 
            <img class="about-body__list__image" src="https://img.icons8.com/windows/36/000000/phoenix-squadron.png"/>
            <li>I'm passionated about technology</li>
          </div>
          <div class="about-body__list__item"> 
            <img class="about-body__list__image" src="https://img.icons8.com/windows/36/000000/phoenix-squadron.png"/>
            <li>If you want to contribute in this project or let a feedback just let me know in one of the social medias on the footer</li>
          </div>
          <div class="about-body__list__item"> 
            <img class="about-body__list__image" src="https://img.icons8.com/windows/36/000000/phoenix-squadron.png"/>
            <li>#NeverStopLearning</li>
          </div>
        </ul>
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

<style scoped>
.about-body {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 74vh;
}
.about-body__image {
  border-radius: 100%;
}

.about-body__list {
  list-style-type: none;
}

.about-body__list__item {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
}

.about-body__list__image {
  margin-right: 0.5rem;
}
@media screen and (max-width: 550px) {
  .about-body {
    flex-direction: column;
    align-items: center;
  }

  .about-body__title {
    font-size: 1.2rem;
  }

  .about-body__image {
    height: 200px;
    width: 180px;
  }
}

@media screen and (min-width: 550px) and (max-width: 920px) {
  .about-body {
    align-items: center;
  }

  .about-body__image {
    height: 200px;
    width: 210px;
  }
}

@media screen and (min-width: 920px) {
  .about-body {
    align-items: center;
  }

  .about-body__image {
    height: 300px;
    width: 280px;
  }
}

@media screen and (min-width: 1400px) {
  .about-body {
    align-items: center;
  }

  .about-body__image {
    height: 400px;
    width: 320px;
  }
}

</style>