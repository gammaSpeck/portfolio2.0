<template>
  <section id="experiences-section" class="experiences-section">
    <div class="experiences-section__bg"></div>

    <div class="experiences-writeup">
      <h2 class="heading-secondary experiences-writeup__heading">Experience</h2>
      <p class="para">
        As any profession may have it, one needs to have a certain level of practice to actually
        have calloused hands.
      </p>
    </div>

    <p class="experiences-quote quote">
      &#34;Good decisions come from experience, and experience comes from bad decisions.&#34;
      <br />- Rita Mae Brown
    </p>

    <div class="experiences">
      <Mscripts />
      <Extras />
      <OpenSource />
    </div>
  </section>
</template>

<script setup lang="ts">
import OpenSource from '@/components/exp/OpenSource.vue'
import Mscripts from '@/components/exp/Mscripts.vue'
import Extras from '@/components/exp/Extras.vue'
</script>
