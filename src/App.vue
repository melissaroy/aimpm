<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from '@/components/MainMenu.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>
    <MainMenu />
  </header>
  <RouterView />
  <Footer />
</template>
