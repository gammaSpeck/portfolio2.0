<template>
  <section id="landing-section" class="landing-section parallax">
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source :src="nebulaVidWebm" type="video/webm" />
        Your browser does not support the video!
      </video>
    </div>

    <div id="intro" class="intro">
      <h1 class="heading-primary intro__name">Madhusoodhanan KM</h1>
      <h6 class="heading-tertiary intro__profession">Full stack developer</h6>
      <p class="para intro__elevator-pitch">
        &#9885; Creating memorable experiences, one line at a time 🌟️
      </p>
    </div>

    <a href="#skills-section">
      <svg class="arrow-down">
        <use :xlink:href="arrowDownIcon"></use>
      </svg>
    </a>
  </section>
</template>

<script setup lang="ts">
import nebulaVidWebm from '@/assets/img/nebula.mp4'

import icons from '@/assets/icons/sprite.svg'

const arrowDownIcon = `${icons}#icon-arrow-down2`
</script>
