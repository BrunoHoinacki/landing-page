<template>
  <div class="container mt-5">
    <div class="text-center">
      <h1 class="mb-4">Dicas para o Dia dos Namorados em Gramado</h1>
      <p class="lead">Descubra os melhores lugares e atividades para aproveitar com seu amor em Gramado.</p>
    </div>
    <ImageCarousel />
    <div class="row mt-5">
      <div class="col-md-6 text-center">
        <h2>Pontos Turísticos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa viverra dignissim.</p>
        <button class="btn btn-romantic" data-bs-toggle="modal" data-bs-target="#modalForm"
          @click="setEbookType('pontos')">Baixar eBook Pontos Turísticos</button>
      </div>
      <div class="col-md-6 text-center">
        <h2>Restaurantes Românticos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa viverra dignissim.</p>
        <button class="btn btn-romantic" data-bs-toggle="modal" data-bs-target="#modalForm"
          @click="setEbookType('restaurantes')">Baixar eBook Restaurantes Românticos</button>
      </div>
    </div>
    <ModalForm :ebookType="ebookType" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImageCarousel from '~/components/ImageCarousel.vue'
import ModalForm from '~/components/ModalForm.vue'

const ebookType = ref('')

const setEbookType = (type) => {
  ebookType.value = type
}
</script>

<style scoped>
h1 {
  color: #e75480;
  font-family: 'Cursive', sans-serif;
  text-shadow: 2px 2px 4px #000000;
}

.lead {
  color: #333333;
}

h2 {
  color: #e75480;
  font-family: 'Cursive', sans-serif;
  text-shadow: 2px 2px 4px #000000;
}

p {
  color: #555555;
}

.btn-romantic {
  background-color: #e75480;
  border-color: #e75480;
  font-family: 'Cursive', sans-serif;
  color: white;
}

.btn-romantic:hover {
  background-color: #d43f6d;
  border-color: #d43f6d;
}
</style>
