<template>
    <footer class="bg-footer text-white p-3 mt-5">
        <div
            class="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
            <p class="small mb-2 mb-md-0">&copy; 2024 Seu Nome ou Empresa. Todos os direitos reservados.</p>
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

<style>
.bg-footer {
    background-color: #e75480;
    background-size: cover;
    background-position: center;
    color: white;
    padding: 20px 0;
    margin-top: 40px;
}

.bg-footer a {
    font-size: 1.5rem;
}

.bg-footer p {
    margin-bottom: 0;
    text-shadow: 2px 2px 4px #000000;
}
</style>
