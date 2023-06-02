<template>
  <Disclosure as="nav" class="bg-primary" v-slot="{ open }">
    <div class="mx-auto container px-6 lg:px-8 py-6">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-lime-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-200"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-between">
          <div class="flex flex-shrink-0 items-center">
            <a href="./">
              <img
                class="block h-20 w-auto lg:hidden"
                src="../assets/AIM-logo-white.svg"
                alt="Your Company" />
              <img
                class="hidden h-20 w-auto lg:block"
                src="../assets/AIM-logo-white.svg"
                alt="Your Company"
            /></a>
          </div>
          <div class="hidden sm:ml-6 md:block">
            <div class="flex space-x-4">
              <RouterLink
                :to="item.href"
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-200 text-white'
                    : 'text-gray-300 hover:border-b-4 hover:border-lime-200',
                  'text-base border-b-4 border-transparent font-medium text-white hover:text-lime-200  py-2 px-4'
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :to="item.href"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-lime-200 text-white'
              : 'text-gray-300 hover:bg-lime-900 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium'
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Who we are', href: '/about', current: false },
  { name: 'Companies', href: '/companies', current: false }
]
</script>
