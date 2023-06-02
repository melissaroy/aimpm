<script setup lang="ts">
import FeatureBanner from '@/components/home/FeatureBanner.vue'
import AboutCompany from '@/components/home/AboutCompany.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import PastProject from '@/components/home/PastProject.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import MainMenu from '@/components/MainMenu.vue'
</script>

<template>
  <header>
    <MainMenu />
  </header>
  <FeatureBanner />
  <AboutCompany />
  <ServicesSection />
  <PastProject />
  <ContactSection />
</template>
