<template>
  <div class="back-to-home">
    <div class="back-to-home-body">
      <router-link class="router-link" :to="{name: 'home'}">
        <button class="back-to-home-body__button">Back to home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.back-to-home-body {
  display: flex;
  justify-content: flex-end;
  margin-right: 5rem;
  margin-bottom: 0.8rem;
}

.back-to-home-body__button {
  padding: 0.6rem 5rem;
  border-radius: 15px;
  border: none;
  font-weight: bold;
  font-size: 1.1rem;
  background-color: #e6aa14;
  transition: 600ms;
}

.back-to-home-body__button:hover {
  color: #f0f0f0;
  cursor: pointer;
  box-shadow: 2px 2px 2px gray;
}

@media screen and (max-width: 550px) {
  .back-to-home-body {
    justify-content: center;
    margin-right: 0;
  }
}

</style>