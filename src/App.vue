<template>
  <div class="container">
    <LandingSection />
    <SkillsSection />
    <ExperiencesSection />
    <AboutMe />
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import LandingSection from '@/pages/LandingSection.vue'
import SkillsSection from '@/pages/SkillsSection.vue'
import ExperiencesSection from '@/pages/ExperiencesSection.vue'
import AboutMe from '@/pages/AboutMeSection.vue'
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
