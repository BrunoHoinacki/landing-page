<template>
  <div class="container mt-5">
    <div class="text-center">
      <h1 class="mb-4">Dicas para o Dia dos Namorados em Gramado</h1>
      <p class="lead">Descubra os melhores lugares e atividades para aproveitar com seu amor em Gramado.</p>
    </div>
    <ImageCarousel />
    <div class="row mt-5">
      <div class="col-md-6">
        <h2>Pontos Turísticos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa viverra dignissim.</p>
      </div>
      <div class="col-md-6">
        <h2>Restaurantes Românticos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae massa viverra dignissim.</p>
      </div>
    </div>
    <div class="text-center mt-5">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalForm">Baixar eBook</button>
    </div>
    <ModalForm />
  </div>
</template>

<script setup>
import ImageCarousel from '~/components/ImageCarousel.vue'
import ModalForm from '~/components/ModalForm.vue'
</script>

<script>
export default {
  head() {
    return {
      title: 'Dicas para o Dia dos Namorados em Gramado',
      meta: [
        { hid: 'description', name: 'description', content: 'Descubra os melhores lugares e atividades para aproveitar o Dia dos Namorados em Gramado com nosso guia completo.' }
      ]
    }
  }
}
</script>
