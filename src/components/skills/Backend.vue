<template>
  <SkillGroup class="skill-type--2" group="Backend" :skills="skills" />
</template>

<script setup lang="ts">
import SkillGroup from './SkillGroup.vue'

const skills = [
  {
    name: 'NodeJS',
    icon: 'icon-node-dot-js'
  },
  {
    name: 'Jenkins',
    icon: 'icon-jenkins'
  },
  {
    name: 'Redis',
    icon: 'icon-redis'
  },
  {
    name: 'MySQL',
    icon: 'icon-mysql'
  },
  {
    name: 'MongoDB',
    icon: 'icon-mongodb'
  },
  {
    name: 'Docker',
    icon: 'icon-docker'
  },
  {
    name: 'AWS',
    icon: 'icon-amazonaws'
  },
  {
    name: 'Kubernetes',
    icon: 'icon-kubernetes'
  }
]
</script>
