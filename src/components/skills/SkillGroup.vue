<template>
  <div class="skill-type">
    <h6 class="heading-tertiary skill-type__heading">{{ props.group }}</h6>

    <div class="skills">
      <template v-for="skill in props.skills">
        <Skill :name="skill.name" :icon="skill.icon" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skill from './Skill.vue'

const props = defineProps<{
  group: string
  skills: {
    name: string
    icon: string
  }[]
}>()
</script>
