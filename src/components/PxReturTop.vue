<template>
  <div :class="{ widgetReturnTop: true, active: appearWidget }" @click="returnTop">
    <div class="widgetReturnTop-btn">
      <font-awesome-icon icon="chevron-up" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, onMounted } from "vue";
library.add(faChevronUp);

let appearWidget = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    let y = window.scrollY;
    y > 550 ? (appearWidget.value = true) : (appearWidget.value = false);
  });
});

const returnTop = () => {
  window.scroll({
    top: Number(`${100}%`),
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
.widgetReturnTop {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 50px;
  height: 50px;
  opacity: 0;
  visibility: hidden;
  transition: 0.8s ease all;

  &-btn {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 3px solid var(--dark);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green-two);

    svg {
      color: var(--dark-three);
    }

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
