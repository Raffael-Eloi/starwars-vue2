<template>
  <div class="menu-component">
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
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.menu-list {
  display: flex;
  list-style-type: none;
  font-size: 1.1rem;
}

.menu-list__item {
  margin-right: 1rem;
}

</style>