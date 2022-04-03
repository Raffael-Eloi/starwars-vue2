<template>
  <footer class="footer">
    <h4 class="author">Made by Raffael Eloi</h4>
    <div class="social-media">
      <a href="https://github.com/Raffael-Eloi" target="_blank">
        <img class="social-media__image" src="https://img.icons8.com/ios-filled/35/000000/github.png"/>
      </a>
      <a href="https://www.linkedin.com/in/raffael-eloi/" target="_blank">
        <img class="social-media__image" src="https://img.icons8.com/fluency/36/000000/linkedin.png"/>
      </a>
      <a href="mailto:raffaeleloi121@gmail.com" target="_blank">
        <img class="social-media__image" src="https://img.icons8.com/fluency/36/000000/gmail.png"/>
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
@media screen and (min-width: 1200px) {
  .footer {
    font-size: 1.3rem;
  }

  .author {
    cursor: pointer;
  }

  .social-media__image {
    height: 45px;
    width: 45px;
  }

  .social-media__image:hover {
    box-shadow: 6px 6px 6px #f0f0f0;
    border-radius: 5px;
  }
}

@media screen and (min-width: 1500px) {
  .footer {
    font-size: 1.4rem;
  }

  .author {
    cursor: pointer;
  }

  .social-media__image {
    height: 60px;
    width: 60px;
  }

  .social-media__image:hover {
    box-shadow: 8px 8px 8px #f0f0f0;
    border-radius: 5px;
  }
}
</style>