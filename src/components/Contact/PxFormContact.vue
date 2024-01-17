<template>
  <!-- Esta es la seccion de contacto -->
  <section class="contact">
    <h2 class="generic-title"><b>Contáctame</b></h2>
    <form class="contact-form" ref="jsFormContact" @submit.prevent="handleSubmitForm">
      <div>
        <input type="text" :class="{ error: false }" placeholder="Tu nombre" v-model="formDataContact.name" />
      </div>
      <div>
        <input type="email" :class="{ error: false }" placeholder="Tu correo" v-model="formDataContact.email" />
      </div>
      <div>
        <input type="tel" :class="{ error: false }" placeholder="Tu numero de celular" v-model="formDataContact.phone"
          maxlength="9" />
      </div>
      <div>
        <textarea :class="{ error: false }" cols="30" rows="10" placeholder="Escribe un mensaje"
          v-model="formDataContact.message"></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-primary" id="js_send-mail">
          Enviar mensaje
        </button>
      </div>
    </form>

    <PxModal :title="titleModal" :message="messageModal" textButton="OK" :isOpenModal="isOpenModal"
      :isCloseModal="isCloseModal" :closeModal="handleCloseModal" />
  </section>
</template>

<script setup lang="ts">
import PxModal from "@/components/PxModal.vue";

import { ref } from "vue";

const formDataContact = ref({
  name: "",
  email: "",
  message: "",
  phone: "",
});

const isOpenModal = ref(false);
const isCloseModal = ref(false);
const jsFormContact = ref(null);
const messageModal = ref("");
const titleModal = ref("");

const handleSubmitForm = async () => {
  try {
    const API = "https://formspree.io/f/mjvjrpjz";
    const response = await fetch(API, {
      method: "POST",
      body: JSON.stringify(formDataContact.value),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok) {
      isOpenModal.value = true;
      titleModal.value = "Gracias!";
      messageModal.value =
        "En breve te escribiré, muchas gracias por visitar mi portafolio";
      document.body.classList.add("hide-scroll");
      formDataContact.value.name = "";
      formDataContact.value.email = "";
      formDataContact.value.message = "";
      formDataContact.value.phone = "";
    } else if (!response.ok && response.status == 400) {
      isOpenModal.value = true;
      titleModal.value = "Hey!";
      messageModal.value = "Completa los campos del formulario";
      document.body.classList.add("hide-scroll");
    }
  } catch (error) {
    isOpenModal.value = true;
    titleModal.value = "Ops!";
    messageModal.value =
      "El servicio de enviar correo esta caído, estoy solucionando este issue.";
    document.body.classList.add("hide-scroll");
  }
};

const handleCloseModal = () => {
  if (
    formDataContact.value.name == "" ||
    formDataContact.value.email == "" ||
    formDataContact.value.message == "" ||
    formDataContact.value.phone == ""
  ) {
    isCloseModal.value = !isCloseModal.value;
    isOpenModal.value = !isOpenModal.value;
    document.body.classList.remove("hide-scroll");
  }
};

</script>

<style lang="scss" scoped>
@import "@/assets/sass/Components/Contact/_form.scss";
</style>