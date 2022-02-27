<template>
  <PerspectiveBox id="exp--3" class="exp exp--3">
    <div class="exp__bg"></div>

    <img :src="cloudCoverLogo" alt="Cloud cover logo" class="exp__company-logo" />

    <div class="exp__writeup">
      <h6 class="heading-tertiary ta-center mb-1">May 2021 - Present</h6>
      <p class="para-med">
        Full stack Product Developer of DataPipes. VueJS with Typescript for Front end. Python with
        Fast API for Backend.
      </p>
      <p class="para-med">Multi cloud integrations with both AWS and GCP.</p>
    </div>
  </PerspectiveBox>
</template>

<script setup lang="ts">
import PerspectiveBox from '../PerspectiveBox.vue'
import cloudCoverLogo from '@/assets/img/CloudCoverLogo.svg'
</script>
