<template>
  <section class="footer-social-media">
    <div class="footer-social-media__icon" v-for="(social, index) in dataSocialMedia" :key="index">
      <a :href="social.link" target="_blank">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: social.iconName }" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ref } from "vue";
library.add(faFacebookF, faInstagram, faLinkedin, faYoutube);
library.add(faTwitter);
const dataSocialMedia = ref([
  {
    link: "https://www.facebook.com/QUISPELUIS.9FCB/",
    iconName: "facebook-f",
  },
  {
    link: "https://twitter.com/LuisDev92",
    iconName: "twitter",
  },
  {
    link: "https://www.instagram.com/luis_quispe_r/",
    iconName: "instagram",
  },
  {
    link: "https://www.linkedin.com/in/luis-aldair-quispe-rios-8b6096161/",
    iconName: "linkedin",
  },
  {
    link: "https://www.youtube.com/channel/UChJZuf5IhQV4DODtvZrwRsw/videos",
    iconName: "youtube",
  },
]);

</script>

<style lang="scss" scoped>
.footer-social-media {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 48px 0;
  max-width: 420px;
  margin: 0 auto;

  &__icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--dark-three);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease all;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      svg {
        color: var(--green-two);
        font-size: 1.5rem;
      }
    }
  }
}
</style>