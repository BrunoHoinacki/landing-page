<template>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden custom-carousel">
        <img :src="item" class="w-full h-auto" draggable="false">
    </UCarousel>
</template>

<script setup lang="ts">
import img1 from '@/assets/images/europeia1.webp'
import img2 from '@/assets/images/europeia2.webp'
import img3 from '@/assets/images/europeia3.webp'

const items = [img1, img2, img3]
</script>

<style scoped>
.custom-carousel {
    max-width: 800px;
    height: 350px;
    margin: 0 auto;
}

.custom-carousel img {
    object-fit: cover;
    height: 100%;
}
</style>