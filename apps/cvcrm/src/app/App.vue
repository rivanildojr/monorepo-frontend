<template>
  <button @click="showToast">Show Toast</button>

  <NxWelcome title="@monorepo-frontend/cvcrm" />
</template>

<script setup lang="ts">
import NxWelcome from '@/cvcrm/app/NxWelcome.vue';
import { useToast } from '@monorepo-frontend/core';

const toast = useToast();

function showToast() {
  toast.success('This is a success toast!');
}
</script>
