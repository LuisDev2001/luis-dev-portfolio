<template>
  <section class="aboutMe" id="about-me">
    <picture>
      <img loading="lazy" src="/assets/img/aboutMe.jpg" alt="About me" />
    </picture>
    <section class="aboutMe-information">
      <h2 class="generic-title">Sobre <b>Mí</b></h2>
      <p>
        Nací un 12 de Setiembre del 2001 en la maternidad de Lima, mis padres me
        educaron y cuidaron. Actualmente vivo en el distrito de Lurin, crecí en
        contacto desde muy chico con una computadora, desde el inicio me
        gustaron los videojuegos y poco a poco fui introduciendome mas en este
        maravilloso mundo de la computacion e informática.
      </p>
      <p>
        En mis tiempos libres me gusta tocar guitarra, escuchar musica, ver
        videos de youtube, jugar a la pelota, ir al cine, nadar en la piscina,
        ir a la playa, pasar el rato en redes sociales, generar contenido
        para mi canal de youtube, salir a caminar para despejar la mente y
        obviamente desarrollar web / challenge´s en html, css, javascript ó Vue.js
      </p>
      <section class="aboutMe-information-buttons">
        <div>
          <router-link to="/contact-me" class="btn btn-primary">
            Contratame
          </router-link>
        </div>
        <div>
          <a href="/assets/docs/CV.pdf" target="_blank" class="btn btn-secondary" download>
            Descargar CV
          </a>
        </div>
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/Components/About/_about.scss";
</style>