<template>
  <div :class="{ modal: true, 'fade-in': isOpenModal, 'fade-out': isCloseModal }">
    <h2 class="modal-title">{{ title }}</h2>
    <p class="modal-text">{{ message }}</p>
    <section class="modal-actions">
      <button class="modal-actions-button" @click="emit('close')">
        {{ textButton }}
      </button>
    </section>
  </div>
  <div :class="{ 'modal-opacity': true, active: isOpenModal }"></div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  message: String,
  textButton: String,
  isOpenModal: Boolean,
  isCloseModal: Boolean,
})

const emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>
@import "@/assets/sass/Components/Modal/_modal.scss";
</style>
