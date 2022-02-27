<template>
  <div class="skill">
    <svg class="skill__icon">
      <use :xlink:href="iconHref"></use>
    </svg>
    <p class="skill__text">{{ props.name }}</p>
  </div>
</template>

<script setup lang="ts">
import icons from '@/assets/icons/sprite.svg'

const props = defineProps<{ name: string; icon: string }>()

const iconHref = `${icons}#${props.icon}`
</script>
