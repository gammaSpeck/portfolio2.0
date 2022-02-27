<template>
  <SkillGroup class="skill-type--3" group="Frontend" :skills="skills" />
</template>

<script setup lang="ts">
import SkillGroup from './SkillGroup.vue'

const skills = [
  {
    name: 'React',
    icon: 'icon-react'
  },
  {
    name: 'NextJS',
    icon: 'icon-next-dot-js'
  },
  {
    name: 'Gatsby',
    icon: 'icon-gatsby'
  },
  {
    name: 'Bootstrap',
    icon: 'icon-bootstrap'
  },
  {
    name: 'MaterialUI',
    icon: 'icon-materialdesign'
  },
  {
    name: 'SASS',
    icon: 'icon-sass'
  },
  {
    name: 'Webpack',
    icon: 'icon-webpack'
  }
]
</script>
