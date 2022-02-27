<template>
  <div class="contact">
    <h3 class="heading-tertiary contact__heading">Contact me</h3>

    <template v-for="c in contactMethods">
      <a :href="c.link" target="_blank" class="contact__item">
        <svg class="contact__item__icon">
          <use :xlink:href="`${icons}#${c.icon}`"></use>
        </svg>
      </a>
    </template>
  </div>
</template>

<script setup lang="ts">
import icons from '@/assets/icons/sprite.svg'

const contactMethods = [
  { link: 'https://www.linkedin.com/in/madhusoodhanan-km', icon: 'icon-linkedin' },
  { link: 'https://www.instagram.com/gammaparticle', icon: 'icon-instagram' },
  { link: 'https://github.com/gammaSpeck', icon: 'icon-github' },
  { link: 'mailto:madhukm3141@gmail.com', icon: 'icon-gmail' }
]
</script>
