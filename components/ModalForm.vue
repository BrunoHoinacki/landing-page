<template>
    <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="modalFormLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content custom-modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalFormLabel">Baixar eBook</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nome</label>
                            <input type="text" class="form-control custom-input" id="name" v-model="form.name" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control custom-input" id="email" v-model="form.email"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Celular</label>
                            <input type="text" class="form-control custom-input" id="phone" v-model="form.phone"
                                required>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-romantic">Baixar</button>
                        </div>
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
import { ref, watch } from 'vue'

const props = defineProps({
    ebookType: {
        type: String,
        required: true
    }
})

const form = ref({
    name: '',
    email: '',
    phone: ''
})
const fileAvailable = ref(false)
const pdfLink = ref('')

watch(() => props.ebookType, (newVal) => {
    if (newVal === 'pontos') {
        pdfLink.value = 'path-to-pontos-turisticos.pdf'
    } else if (newVal === 'restaurantes') {
        pdfLink.value = 'path-to-restaurantes-romanticos.pdf'
    }
})

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
.custom-modal-content {
    padding: 20px;
    background-color: #ffe6e6;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-header {
    border-bottom: none;
}

.modal-title {
    font-size: 2rem;
    font-family: 'Cursive', sans-serif;
    color: #e75480;
}

.btn-close {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
}

.form-label {
    font-family: 'Cursive', sans-serif;
    color: #e75480;
}

.custom-input {
    border: 1px solid #e75480;
    border-radius: 5px;
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

.btn-secondary {
    background-color: #ffffff;
    border-color: #e75480;
    color: #e75480;
}

.btn-secondary:hover {
    background-color: #f8f9fa;
    border-color: #d43f6d;
    color: #d43f6d;
}
</style>