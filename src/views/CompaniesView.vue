<template>
  <div class="py-14 px-6 sm:py-32 lg:px-8 bg-light_gray">
    <div class="p-14 mx-auto container grid grid-cols-2">
      <div class="mx-auto">
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
      <div class="bg-white rounded">
        <img src="@/assets/accomodations.jpeg" alt="" />
        <img src="@/assets/broken-sticks.jpeg" alt="" />
        <img src="@/assets/construction.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const agreed = ref(false)
</script>
