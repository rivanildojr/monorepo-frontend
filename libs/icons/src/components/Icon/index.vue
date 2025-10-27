<template>
  <component
    :is="iconComponent"
    v-bind="isFontAwesome ? fontAwesomeProps : $attrs"
    :class="iconClasses"
    :style="iconStyles"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { Component } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { svgs } from '../../svg';
import type { SvgIcon } from '../../svg';

import { IconProps } from '../../interface';
import { iconsSize } from '../../constants';

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
  rotation: undefined,
  flip: undefined,
  spin: false,
  pulse: false,
});

const isFontAwesome = computed(() =>
  ['fa:', 'fab:', 'far:'].some((prefix) => props.name.startsWith(prefix)),
);

const fontAwesomeProps = computed(() => {
  const { name } = props;

  let prefix: 'fa' | 'far' | 'fab' = 'fa';
  let iconName = name;

  if (name.startsWith('fab:')) {
    prefix = 'fab';

    iconName = name.replace('fab:', '');
  } else if (name.startsWith('far:')) {
    prefix = 'far';

    iconName = name.replace('far:', '');
  } else if (name.startsWith('fa:')) {
    iconName = name.replace('fa:', '');
  }

  return {
    icon: [prefix, iconName],
    rotation: props.rotation,
    flip: props.flip,
    spin: props.spin,
    pulse: props.pulse,
  };
});

const iconComponent = computed<Component>(() => {
  const { name } = props;

  if (name.startsWith('svg:')) {
    const svgName = name.replace('svg:', '') as SvgIcon;

    return svgs[svgName] || '';
  }

  if (isFontAwesome.value || name in svgs === false) {
    return FontAwesomeIcon;
  }

  return svgs[name as SvgIcon] || '';
});

const iconClasses = computed(() => {
  const classes: string[] = ['icon'];

  if (iconsSize.includes(props.size)) {
    classes.push(`icon--${props.size}`);
  }

  return classes;
});

const iconStyles = computed(() => {
  const styles: Record<string, string> = {};

  if (!iconsSize.includes(props.size)) {
    styles.width = props.size;
    styles.height = props.size;
  }

  if (props.color) {
    styles.color = props.color;
  }

  return styles;
});
</script>

<style lang="scss" scoped src="./index.scss" />
