<template>
  <button
    type="button"
    class="btn btn-primary"
    @click="showToast"
  >
    Show Toast

    <Icon
      name="far:house"
      size="md"
    />
  </button>

  <Icon
    name="svg:cvsign-icon"
    size="lg"
  />

  <Icon
    name="cvsign-icon"
    size="lg"
  />

  <Icon
    name="svg:vender-icon"
    size="md"
  />

  <Icon
    name="vender-icon"
    size="lg"
  />

  <Icon
    name="vender-icon"
    size="xl"
  />

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

import { Icon } from '@monorepo-frontend/icons';

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
