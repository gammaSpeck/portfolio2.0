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
    name: 'Shell script',
    icon: 'icon-linux'
  },
  {
    name: 'Python',
    icon: 'icon-python'
  }
]
</script>
