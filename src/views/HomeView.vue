<template>
  <div class="home">
    <section class="banner">
      <div class="banner-video">
        <video autoplay loop muted>
          <source loading="lazy" src="/assets/video/writtingKeyBoard.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="banner-image-mobile">
        <img src="/assets/img/jsBannerMobile.jpg" alt="javascript banner" />
      </div>
      <section class="banner-text">
        <p>
          Hola, yo soy
          <br />
          <b>Luis Aldair Quispe Rios</b>
          <br />
          <span>Y ESTE ES MI PORTAFOLIO</span>
        </p>
      </section>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/Components/Banner/_banner.scss";
</style>
