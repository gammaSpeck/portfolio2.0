<template>
  <SkillGroup class="skill-type--4" group="Others" :skills="skills" />
</template>

<script setup lang="ts">
import SkillGroup from './SkillGroup.vue'

const skills = [
  {
    name: 'Jenkins',
    icon: 'icon-jenkins'
  },
  {
    name: 'Jest',
    icon: 'icon-jest'
  },
  {
    name: 'Terraform',
    icon: 'icon-terraform'
  },
  {
    name: 'Swagger',
    icon: 'icon-swagger'
  }
]
</script>
