<template>
  <div :id="id">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { assign3DHoverAnimation } from '@/utils'
import { onMounted } from 'vue'

const props = defineProps<{ id: string }>()

onMounted(() => {
  assign3DHoverAnimation(props.id)
})
</script>
