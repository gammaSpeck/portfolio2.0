<template>
  <section id="skills-section" class="skills-section parallax" ref="container">
    <div class="skills-section__bg"></div>
    <!-- TODO: Fix BG img -->

    <div class="skills-writeup">
      <h2 class="heading-secondary skills-writeup__heading">Skills</h2>
      <p class="para">
        As a full stack developer, you gotta be a lean mean IT machine where you
        work, not only on the frontend & backend, but Devops, Design, Testing,
        CICD and a lot more too! That's exactly what I am working towards. Here
        is a list of things I am proficient in.
      </p>
    </div>

    <CodingLanguages />
    <Backend />
    <FrontEnd />
    <Others />
  </section>
</template>

<script setup lang="ts">
import CodingLanguages from "@/components/skills/CodingLanguages.vue";
import Backend from "@/components/skills/Backend.vue";
import FrontEnd from "@/components/skills/FrontEnd.vue";
import Others from "@/components/skills/Others.vue";
</script>
