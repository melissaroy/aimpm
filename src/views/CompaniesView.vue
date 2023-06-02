<template>
  <header>
    <MainMenu />
  </header>
  <div class="py-14 px-6 sm:py-32 lg:px-8 bg-light_gray">
    <div class="p-14 mx-auto container grid grid-cols-1 xl:grid-cols-2">
      <div class="mb-10 xl:mr-5 xl:mb-0">
        <div class="title-section flex items-center mb-5">
          <div class="title-line mr-4 bg-black"></div>
          <h2 class="uppercase text-xl font-sans font-medium">Companies</h2>
        </div>
        <h2 class="mt-2 text-4xl font-sans font-bold sm:text-6xl mb-10">AIM Group Of Companies</h2>
        <p>
          I’m proud to be able to share the integration that exists between the various companies
          that I have been able to open and run over the last 20 plus years.
        </p>
      </div>
      <div class="bg-white rounded-lg p-10">
        <a
          href="/accomodations"
          class="text-center block py-2 text-xl font-bold transition ease-in-out hover:-translate-y-1 hover:underline"
        >
          <div class="flex items-center">
            <div class="w-44 h-40 overflow-hidden rounded-lg flex mr-3">
              <img src="@/assets/accomodations.jpeg" class="object-cover w-full" alt="" />
            </div>

            Accommodations / Services
          </div></a
        >
        <a
          href="#"
          class="text-center block py-2 text-xl font-bold transition ease-in-out hover:-translate-y-1 hover:underline"
        >
          <div class="flex items-center">
            <div class="w-44 h-40 overflow-hidden rounded-lg relative mr-3 flex">
              <img src="@/assets/construction.jpeg" class="object-cover w-full" alt="" />
            </div>

            Construction Companies
          </div></a
        >
        <a
          href="#"
          class="text-center block py-2 text-xl font-bold transition ease-in-out hover:-translate-y-1 hover:underline"
        >
          <div class="flex items-center">
            <div class="w-44 h-40 overflow-hidden rounded-lg relative mr-3 flex">
              <img src="@/assets/broken-sticks.jpeg" class="object-cover w-full" alt="" />
            </div>

            Consumption
          </div></a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainMenu from '@/components/MainMenu.vue'

const agreed = ref(false)
</script>
