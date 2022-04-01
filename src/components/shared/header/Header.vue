<template>
<div class="header">
  <router-link :to="{name: 'home'}" class="router-link"><h3 class="header-title">Star wars with Vue</h3></router-link>
  <nav>
    <ul class="menu-list">
      <li class="menu-list__item"> 
        <router-link :to="{name: 'home'}" class="router-link">Home</router-link>
      </li>
      <li class="menu-list__item">
        <router-link :to="{name: 'motivation'}" class="router-link">Motivation</router-link>
      </li>
      <li class="menu-list__item">
        <router-link :to="{name: 'about'}" class="router-link">About</router-link>
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
.router-link{
  text-decoration: none;
  color: inherit;
}

.router-link:hover{
 color:#e6aa14;
}

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 3px 1px gray;
  padding: 10px;
}

.header-title {
 margin-left: 1rem;
}

.header-title:hover {
 cursor: pointer;
 color:#e6aa14;
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

</style>