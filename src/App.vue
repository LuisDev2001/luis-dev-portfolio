<template>
  <PxHeader />
  <PxReturTop />
  <router-view v-slot="{ Component }">
    <transition name="mode-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import PxHeader from "@/components/PxHeader.vue";
import PxReturTop from "@/components/PxReturTop.vue";
</script>

<style lang="scss">
@import "@/assets/sass/_main.scss";
</style>
