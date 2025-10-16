<template>
  <button
    type="button"
    class="btn btn-primary"
    @click="showToast"
  >
    Show Toast
  </button>

  <select
    class="form-select"
    aria-label="Default select example"
  >
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <NxWelcome title="@monorepo-frontend/cvcrm" />
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

import NxWelcome from '@/cvcrm/app/NxWelcome.vue';
import { useToast } from '@monorepo-frontend/core';

const toast = useToast();

function showToast() {
  toast.success('This is a success toast!');
}

const { appContext } = getCurrentInstance()!;
const $bootstrap = appContext.config.globalProperties.$bootstrap;

console.info({
  b: $bootstrap,
});
</script>
