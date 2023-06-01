<template>
  <div
    class="bg-secondary py-24 sm:py-32 bg-left-top bg-[url('../src/assets/icons/forest-icon.png')] bg-[length:10rem]"
  >
    <div class="container px-6 lg:px-8">
      <div class="title-section flex items-center mb-5">
        <div class="title-line mr-4 bg-black"></div>
        <h2 class="uppercase text-xl font-sans font-medium">Our Ethics</h2>
      </div>
      <div class="">
        <h2 class="mt-2 text-2xl font-sans sm:text-6xl">Our Environmental Values</h2>
      </div>
      <div class="mt-16 sm:mt-20 lg:mt-24 flex">
        <dl class="grid max-w-xl grid-col-1 md:grid-cols-2 gap-8 md:max-w-none">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative bg-white p-6 rounded-xl"
          >
            <dt class="text-2xl">
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-lg leading-7">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    name: 'Quality and Longevity',
    description:
      'We value quality products over those associated with constant maintenance and premature replacement. In today’s disposable society, it’s important that we build for the long term by choosing quality materials with long lifecycles to reduce the negative environmental impacts often associated with construction projects.'
  },
  {
    name: 'Sustainability',
    description:
      'We value practices that exemplify sustainability: responsible sourcing, recycling, up-cycling, and re-use of materials. We strive to use materials that have been responsibly extracted from sustainable resources, and have strategies in place to reduce and limit our emissions and waste.'
  },
  {
    name: 'Community',
    description:
      'We value the community we live and work in. We build in a manner that creates and supports the health of our communities and meets the needs of our increasingly eco-conscious consumers. We support and participate in community efforts to increase municipal environmental action.'
  },
  {
    name: 'Awareness',
    description:
      'We value being aware of how our industry contributes to the global climate crisis and how changing societal demands are implicating industry requirements and regulations. We stay informed and continually evolve, integrating emerging industry best practices into our operations.'
  }
]
</script>
