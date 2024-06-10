<template>
  <div class="d-flex flex-column min-vh-100">
    <AppHeader class="header" />
    <div class="flex-grow-1">
      <NuxtPage />
    </div>
    <AppFooter class="footer" />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
