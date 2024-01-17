<template>
  <div class="my-port">
    <section class="portafolio">
      <h2 class="generic-title">Portafolio <b>Destacado</b></h2>
      <section class="main-carousel portafolio-wrapper grid">
        <div class="item" v-for="(card, index) in cardState" :key="index">
          <div class="item-image">
            <img loading="lazy" :src="card.src" :alt="card.itemTitle" />
          </div>
          <div class="item-information">
            <h3 v-text="card.itemTitle"></h3>
            <div class="item-information-made">
              <h4>Hecho en:</h4>
              <div class="labels">
                <span v-for="(label, index) in card.labels" :key="index" :class="'item-information-label ' + label">
                  {{ label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const cardState = ref([
  {
    itemTitle: "Blog afrianska",
    src: "/assets/img/BlogAfrianska.PNG",
    labels: {
      madeLabelHtml: "HTML",
      madeLabelSass: "SASS",
    },
  },
  {
    itemTitle: "Landing Simple booking",
    src: "/assets/img/chatAppChallenge.PNG",
    labels: {
      madeLabelHtml: "HTML",
      madeLabelSass: "SASS",
    },
  },
  {
    itemTitle: "Dog CRUD",
    src: "/assets/img/DogCrudChallenge.PNG",
    labels: {
      madeLabelHtml: "HTML",
      madeLabelSass: "SASS",
      madeLabelJs: "JavaScript",
    },
  },
  {
    itemTitle: "Listing job finder",
    src: "/assets/img/JubListingChallengeWithVue.PNG",
    labels: {
      madeLabelVue: "VUE (CDN)",
      madeLabelCss: "CSS",
    },
  },
  {
    itemTitle: "Pachaqtec Marketplace",
    src: "/assets/img/PachaQtecEcommerceApp.PNG",
    labels: {
      madeLabelVue: "VUE (CLI)",
      madeLabelCss: "CSS",
    },
  },
  {
    itemTitle: "Pacha Video",
    src: "/assets/img/PachaTV.PNG",
    labels: {
      madeLabelVue: "VUE (CLI)",
      madeLabelSass: "SASS",
    },
  },
  {
    itemTitle: "Platzi exchange",
    src: "/assets/img/PlatziExChangeVue.PNG",
    labels: {
      madeLabelVue: "VUE (CLI)",
      madeLabelCss: "CSS",
    },
  },
  {
    itemTitle: "Platzi video",
    src: "/assets/img/PlatziVideoJSVanilla.PNG",
    labels: {
      madeLabelHtml: "HTML",
      madeLabelCss: "CSS",
      madeLabelJs: "JavaScript",
    },
  },
  {
    itemTitle: "To do list",
    src: "/assets/img/ToDoListApp.PNG",
    labels: {
      madeLabelHtml: "HTML",
      madeLabelCss: "CSS",
      madeLabelJs: "JavaScript",
    },
  },
  {
    itemTitle: "Upload files challenge app",
    src: "/assets/img/UploadFilesChallenge.png",
    labels: {
      madeLabelHtml: "HTML",
      madeLabelCss: "CSS",
    },
  },
  {
    itemTitle: "Buttons components with Vue 3",
    src: "/assets/img/buttons.png",
    labels: {
      madeLabelVue: "VUE (CLI)",
      madeLabelSass: "SASS",
    },
  },
  {
    itemTitle: "Todo app challenge with Vue 3",
    src: "/assets/img/todo.png",
    labels: {
      madeLabelVue: "VUE (CLI)",
      madeLabelSass: "SASS",
    },
  },
  {
    itemTitle: "Winbnb Challenge with Vue 3",
    src: "/assets/img/winbnb.png",
    labels: {
      madeLabelVue: "VUE (CLI)",
      madeLabelSass: "SASS",
    },
  },
  {
    itemTitle: "Weather App with Vue 3",
    src: "/assets/img/appweather.PNG",
    labels: {
      madeLabelVue: "VUE (CLI)",
      madeLabelSass: "SASS",
    },
  },
  {
    itemTitle: "Github Jobs App with Vue 3",
    src: "/assets/img/appJobs.PNG",
    labels: {
      madeLabelVue: "VUE (CLI)",
      madeLabelSass: "SASS",
    },
  },
]);
</script>

<style lang="scss" scoped>
@import "@/assets/sass/Components/Portfolio/_portfolio.scss";
</style>
