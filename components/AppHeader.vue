<template>
    <header class="bg-header text-white p-2">
        <div class="container">
            <h1>Dia dos Namorados em Gramado</h1>
        </div>
    </header>
</template>
<style scoped>
.bg-header {
    background-color: #e75480;
    background-size: cover;
    background-position: center;
    color: white;
    padding: 1rem 0;
}

.bg-header h1 {
    text-align: center;
    font-size: 2rem;
    text-shadow: 2px 2px 4px #000000;
}

/* Media query para telas menores que 600px */
@media (max-width: 600px) {
    .bg-header {
        padding: 0.5rem 0;
    }

    .bg-header h1 {
        font-size: 1.5rem;
    }
}

/* Media query para telas menores que 400px */
@media (max-width: 400px) {
    .bg-header {
        padding: 0.25rem 0;
    }

    .bg-header h1 {
        font-size: 1.5rem;
    }
}
</style>