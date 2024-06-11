<template>
    <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="modalFormLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content custom-modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalFormLabel">Baixar eBook</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="!fileAvailable">
                        <form @submit.prevent="submitForm">
                            <div class="mb-3">
                                <label for="name" class="form-label">Nome</label>
                                <input type="text" class="form-control custom-input" id="name" v-model="form.name"
                                    required>
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
                                <button type="submit" class="btn btn-romantic"><i class="fas fa-download"></i>
                                    Baixar</button>
                            </div>
                        </form>
                    </div>
                    <div v-else class="text-center">
                        <p>Obrigado por baixar o eBook, Feliz dia dos namorados <i class="fas fa-heart"></i></p>
                        <a :href="pdfLink" download class="btn btn-secondary"><i class="fas fa-file-pdf"></i> Download
                            PDF</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

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
        console.log('pontos');
        pdfLink.value = '/pdf/pontos-turisticos-gramado.pdf';
    } else if (newVal === 'restaurantes') {
        console.log('restaurantes');
        pdfLink.value = '/pdf/restaurantes-romanticos-gramado.pdf';
    }
})

onMounted(() => {
    const phoneInput = document.getElementById('phone')
    if (phoneInput) {
        IMask(phoneInput, {
            mask: '+{55} (00) 00000-0000'
        })
    }
})

const submitForm = async () => {
    try {
        const response = await fetch('/api/saveForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form.value),
        });

        if (response.ok) {
            // Simulação de envio bem-sucedido
            setTimeout(() => {
                fileAvailable.value = true;
            }, 1000);
        } else {
            console.error('Erro ao enviar os dados:', await response.json());
        }
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
    }
};

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
    color: #e75480;
    font-weight: 700;
}

.btn-close {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
}

.form-label {
    color: #e75480;
}

.custom-input {
    border: 1px solid #e75480;
    border-radius: 5px;
}

.btn-romantic {
    background-color: #e75480;
    border-color: #e75480;
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
