<template>
  <section class="contact-me">
    <h2 class="generic-title">Ponerse en <b>Contacto</b></h2>

    <section class="contact-me-wrapper">
      <PxFormContact />

      <PxPersonalInfo />
    </section>

    <PxSocialMedia />
  </section>
</template>

<script setup lang="ts">
import PxPersonalInfo from "@/components/Contact/PxPersonalInfo.vue";
import PxFormContact from "@/components/Contact/PxFormContact.vue";
import PxSocialMedia from "@/components/Contact/PxSocialMedia.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/sass/Components/Contact/_globalContact.scss";
</style>
