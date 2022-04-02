<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
* {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.center {
  text-align: center;
}

.router-link{
    text-decoration: none;
    color: inherit;
  }
</style>
