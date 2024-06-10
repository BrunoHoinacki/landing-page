<template>
    <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden custom-carousel">
        <img :src="item" class="w-full h-auto" draggable="false">
    </UCarousel>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import img1 from '@/assets/images/europeia1.webp'
import img2 from '@/assets/images/europeia2.webp'
import img3 from '@/assets/images/europeia3.webp'

interface Carousel {
    page: number;
    pages: number;
    select(page: number): void;
    next(): void;
}

const items = [img1, img2, img3]

const carouselRef = ref < Carousel | null > (null)

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})
</script>

<style scoped>
.custom-carousel {
    max-width: 800px;
    height: 400px;
    margin: 0 auto;
}

.custom-carousel img {
    object-fit: cover;
    height: 100%;
}
</style>