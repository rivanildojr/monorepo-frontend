<template>
  <div class="app">
    <TheHeader />

    <main>
      <RouterView v-slot="{ Component, route }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component
            :is="Component"
            :key="route.name"
          />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import TheHeader from '@/cvcrm/components/TheHeader/index.vue';
</script>

<style lang="scss" src="./index.scss" />
