<template>
    <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="modalFormLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalFormLabel">Baixar eBook</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="name" v-model="form.name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" v-model="form.email" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Celular</label>
                            <input type="text" class="form-control" id="phone" v-model="form.phone" required>
                        </div>
                        <button type="submit" class="btn btn-success">Baixar</button>
                    </form>
                    <div v-if="fileAvailable" class="text-center mt-3">
                        <a :href="pdfLink" download class="btn btn-secondary">Download PDF</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    phone: ''
})
const fileAvailable = ref(false)
const pdfLink = ref('path-to-your-pdf-file.pdf')

const submitForm = () => {
    // Lógica para processar o formulário
    // Exemplo: enviar os dados para um servidor

    // Simulação de envio bem-sucedido
    setTimeout(() => {
        fileAvailable.value = true
    }, 1000)
}
</script>

<style scoped>
.modal-content {
    padding: 20px;
}
</style>