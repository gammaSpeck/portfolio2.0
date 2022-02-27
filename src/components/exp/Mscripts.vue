<template>
  <PerspectiveBox id="exp--1" class="exp exp--1">
    <div class="exp__bg"></div>

    <img :src="mscriptsLogo" alt="mscripts logo" class="exp__company-logo" />

    <div class="exp__writeup">
      <h6 class="heading-tertiary ta-center mb-1">Jan 2019 - May 2021</h6>
      <p class="para-med">
        Over here, I have worked with Frontend (ReactJS), Backend (NodeJS) and Devops (AWS).
      </p>
      <p class="para-med">
        I have also architected projects and mentored junior developers in a product's SDLC.
      </p>
    </div>
  </PerspectiveBox>
</template>

<script setup lang="ts">
import mscriptsLogo from '@/assets/img/mscripts-logo.png'

import PerspectiveBox from '../PerspectiveBox.vue'
</script>
