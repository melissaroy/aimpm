<template>
  <div class="bg-primary py-24 sm:py-32">
    <div class="px-6 lg:px-8 container">
      <div class="mx-auto text-white">
        <div class="title-section flex items-center mb-5">
          <div class="title-line mr-4 bg-white"></div>
          <h2 class="uppercase text-xl font-sans font-medium">Our Commitment</h2>
        </div>
        <h2 class="mt-2 text-4xl font-sans sm:text-6xl">Quality is always our priority</h2>
      </div>
      <div class="mt-16 sm:mt-20 lg:mt-24 flex flex-col md:flex-row">
        <dl
          class="grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 md:max-w-none lg:gap-y-16 border-l border-lime-900"
        >
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold text-white">
              <div
                class="absolute left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"
              >
                <img v-bind:src="feature.url" :alt="feature.alt" class="w-7 h-7" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-white">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
        <div class="mt-10 md:ml-10 md:mt-0">
          <img
            src="/src/assets/Yurts-and-Jupes.jpg"
            alt="AIM Project Management"
            class="object-cover w-full rounded-xl h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import workmanship from '../../assets/icons/handshake.png'
import communication from '../../assets/icons/chat.png'
import transparency from '../../assets/icons/analytics.png'
import cleanliness from '../../assets/icons/mop.png'
import enviroment from '../../assets/icons/organic.png'

const features = [
  {
    name: 'Workmanship',
    description:
      'We only employ first-class licensed craftsmen and provide a 100% satisfaction guarantee on all work.',
    url: workmanship,
    alt: 'img-1'
  },
  {
    name: 'Communication',
    description:
      'We listen so we can thoroughly understand your vision and project requirements. Communication is key to the success of any project and relationship. We’re building more than just structures!',
    url: communication,
    alt: 'img-1'
  },
  {
    name: 'Transparency',
    description:
      'When our team and client have a clear understanding of expectations and progress, the result is an increase in trust, efficiency, improved decision-making, and higher quality work.',
    url: transparency,
    alt: 'img-1'
  },
  {
    name: 'Cleanliness',
    description:
      'We treat your site like our own home. A clean workplace is a safe and productive workplace.',
    url: cleanliness,
    alt: 'img-1'
  },
  {
    name: 'Environment',
    description:
      'We are committed to respecting and protecting the environment. We’re leading by example through our environmental values.',
    url: enviroment,
    alt: 'img-1'
  }
]
</script>
