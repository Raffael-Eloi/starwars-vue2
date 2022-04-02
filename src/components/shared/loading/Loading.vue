<template>
  <div class="loading"></div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.loading {
  width: 120px;
  height: 120px;
  border: 20px solid;
  border-radius: 50%;
  border-top-color: transparent;
  margin: 0 auto;
  color: #e6aa14;
  animation: load 1s infinite linear;
  margin-top: 100px;
}

@keyframes load {
  to {
    transform: rotate(360deg);
  }
}


</style>