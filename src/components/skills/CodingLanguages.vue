<template>
  <SkillGroup class="skill-type--1" group="Coding languages" :skills="skills" />
</template>

<script setup lang="ts">
import SkillGroup from './SkillGroup.vue'

const skills = [
  {
    name: 'Javascript',
    icon: 'icon-javascript'
  },
  {
    name: 'Typescript',
    icon: 'icon-typescript'
  },
  {
    name: 'Python',
    icon: 'icon-python'
  },
  {
    name: 'Shell script',
    icon: 'icon-linux'
  }
]
</script>
