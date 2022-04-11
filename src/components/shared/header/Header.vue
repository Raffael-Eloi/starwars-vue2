<template>
<header class="header">
  <router-link :to="{name: 'home'}" class="router-link"><h3 class="header-title">Star wars with Vue.js</h3></router-link>
  <nav class="menu-mobile" @click="showHiddenMenu()">
    <ul class="menu-mobile-list">
      <li class="menu-mobile-list__item">-</li>
      <li class="menu-mobile-list__item">-</li>
      <li class="menu-mobile-list__item"></li>
    </ul>
  </nav>
  <nav class="menu">
    <ul class="menu-list">
      <li class="menu-list__item"> 
        <router-link :to="{name: 'home'}" class="router-link">Home</router-link>
      </li>
      <li class="menu-list__item">
        <router-link :to="{name: 'motivation'}" class="router-link">Motivation</router-link>
      </li>
      <li class="menu-list__item">
        <router-link :to="{name: 'about'}" class="router-link">About me</router-link>
      </li>
      <li class="menu-list__item">
        <router-link :to="{name: 'credits'}" class="router-link">Credits</router-link>
      </li>
    </ul>
  </nav>
  </header>
</template>

<script>

export default {
  props: {
    showMenu: {
      type: Boolean
    },
    showHiddenMenu: {
      type: Function
    }
  },

  // methods: {
  //   showHiddenMenu() {
  //     this.showMenu = !this.showMenu;
  //   }
  // }
}
</script>

<style scoped>
  .router-link:hover{
   color:#e6aa14;
  }
  
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 3px 3px 1px gray;
    padding: 10px;
    background-image: url(../../../assets/images/footer.jpg);
    background-position: center;
    background-size: cover;
    color: #f0f0f0;
    text-shadow: 4px 3px 4px black;
  }
  
  .header-title {
   margin-left: 1rem;
  }
  
  .header-title:hover {
   cursor: pointer;
   color:#e6aa14;
  }

@media screen and (max-width: 520px) {

  .menu-mobile {
    display: block;
    margin-right: 1rem;
  }

  .menu-mobile-list {
    list-style-type: none;
  }

  .menu-mobile-list__item {
    background-color: #D9A00F;
    color:#D9A00F;
    padding: 0;
    margin-bottom: 1px;
    height: 6px;
    width: 35px;
    border-radius: 10px;
  }

  .menu {
    display: none;
  }
  
  .menu-list {
    display: flex;
  }
  
  .menu-list__item {
    list-style: none;
    padding: 5px;
    margin-right: 1rem;
  }
  
  .menu-list__item {
    cursor: pointer;
  }
}

@media screen and (min-width: 520px) {
  .menu-mobile {
    display: none;
  }

  .menu-list {
    display: flex;
  }
  
  .menu-list__item {
    list-style: none;
    padding: 5px;
    margin-right: 1rem;
    text-shadow: 4px 3px 4px black;
  }
  
  .menu-list__item {
    cursor: pointer;
  }
}

@media screen and (min-width: 800px) {
  .menu-mobile {
    display: none;
  }

  .menu-list {
    display: flex;
  }
  
  .menu-list__item {
    list-style: none;
    padding: 5px;
    margin-right: 1rem;
  }
  
  .menu-list__item {
    cursor: pointer;
  }
}

@media screen and (min-width: 1100px) {
  .header-title {
    margin-left: 10rem;
  }

  .menu {
    margin-right: 10rem;
  }

  .menu-list {
    font-size: 1.2rem;
  }
}

</style>