<template>
  <NxWelcome title="@monorepo-frontend/cvcrm" />
</template>

<script setup lang="ts">
import NxWelcome from '@/cvcrm/app/NxWelcome.vue';
import { core } from '@monorepo-frontend/core';
console.info(core());
</script>
