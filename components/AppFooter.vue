<template>
    <footer class="bg-dark text-white p-3 mt-5">
        <div class="container d-flex justify-content-between align-items-center">
            <p>&copy; 2024 Seu Nome ou Empresa. Todos os direitos reservados.</p>
            <div>
                <a href="https://wa.me/SeuNumero" target="_blank" class="text-white me-3">
                    <font-awesome-icon icon="fa-brands fa-whatsapp" />
                </a>
                <a href="https://instagram.com/SeuPerfil" target="_blank" class="text-white me-3">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
                <a href="https://seusite.com" target="_blank" class="text-white">
                    <font-awesome-icon icon="fa-solid fa-globe" />
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
    background-color: #343a40;
    color: white;
    padding: 20px 0;
    margin-top: 40px;
}

a {
    font-size: 1.5rem;
}
</style>