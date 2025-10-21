<template>
  <button
    :type="type"
    class="cv-button"
    :class="[
      cvbuttonVariant,
      cvButtonSize,
      { 'cvButton--loading': loading, 'cvButton--disabled': disabled },
    ]"
    :disabled="disabled || loading"
    v-bind="$attrs"
    @click="handleClick"
  >
    <Icon
      v-if="loading"
      :size="iconSize"
      name="far:spinner"
      spin
    />

    <Icon
      v-else-if="icon && iconPosition === 'left'"
      :name="icon"
      :size="iconSize"
    />

    <span v-if="!hideText && !loading">
      <slot>{{ label }}</slot>
    </span>

    <Icon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
      :size="iconSize"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Icon } from '@monorepo-frontend/icons';

import type { Button } from './types';

const props = withDefaults(defineProps<Button>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  icon: undefined,
  iconPosition: 'left',
  iconSize: undefined,
  loading: false,
  disabled: false,
  label: '',
  hideText: false,
});

const emit = defineEmits<{
  (e: 'onClick', event: MouseEvent): void;
}>();

const cvbuttonVariant = computed(() => `cv-button--${props.variant}`);
const cvButtonSize = computed(() => `cv-button--${props.size}`);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('onClick', event);
  }
};
</script>

<style lang="scss" scoped src="./index.scss" />
