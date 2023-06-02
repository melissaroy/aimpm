<script setup lang="ts">
import MainMenu from '@/components/MainMenu.vue'
</script>
<template>
  <header>
    <MainMenu />
  </header>
  <div class="p-4 py-32 relative">
    <div class="container mx-auto">
      <h2 class="mt-2 text-4xl font-sans sm:text-6xl font-bold">Consumption</h2>

      <div class="mt-10 font-bold">
        <h3>Broken Stick Brewing Company</h3>

        <a
          class="font-bold border-b-2 border-secondary hover:bg-secondary"
          href="http://www.brokenstickbrewing.com/"
          >www.brokenstickbrewing.com</a
        >
        <h3 class="mt-10 font-bold">Hamond Catering (Wood fired pizza oven)</h3>

        <h3 class="mt-10 font-bold">Hill-Side BBQ coming 2023</h3>
      </div>
    </div>
  </div>
</template>
