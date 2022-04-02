<template>
  <footer class="footer">
    <h4>Made by <span class="yellow-color">Raffael Eloi</span></h4>
    <div class="social-media">
      <a href="https://github.com/Raffael-Eloi" target="_blank">
        <img src="https://img.icons8.com/ios-filled/35/000000/github.png"/>
      </a>
      <a href="https://www.linkedin.com/in/raffael-eloi/" target="_blank">
        <img src="https://img.icons8.com/fluency/36/000000/linkedin.png"/>
      </a>
      <a href="mailto:raffaeleloi121@gmail.com" target="_blank">
        <img src="https://img.icons8.com/fluency/36/000000/gmail.png"/>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 3px 3px 1px gray;
  padding: 1.5rem;
  background-image: url(https://olhardigital.com.br/wp-content/uploads/2021/02/star-wars.jpg);
  background-position: center;
  background-size: cover;
  color: white;
  text-shadow: 4px 3px 4px black;
}

</style>