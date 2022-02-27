<template>
  <section id="about-section" class="about-section">
    <div class="about-section__bg"></div>
    <h2 class="heading-secondary">About Me</h2>
    <div class="about-me">
      <p class="para para--2">
        I am just another guy living in one of the multiverses who's trying to make this world a
        better place one smile at a time.
      </p>
      <p class="para para--2 mb-1">
        I do a lot of things and tech happens to be something I love and enjoy. Building solutions
        for problems using technology is extremely satisfying and empowering.
      </p>
      <p class="para para--2">Some of my interests:</p>

      <ul class="about-me__interests">
        <li>
          <p class="para para--2">Space <br />🌌</p>
        </li>
        <li>
          <p class="para para--2">Art <br />🎨</p>
        </li>
        <li>
          <p class="para para--2">Physics <br />🔭</p>
        </li>
        <li>
          <p class="para para--2">Poetry <br />🧾</p>
        </li>
        <li>
          <p class="para para--2">Math <br />👩🏻‍🔬</p>
        </li>
        <li>
          <p class="para para--2">Theatre <br />🎭</p>
        </li>
      </ul>
    </div>

    <ContactMe />

    <PhotoCard />
  </section>
</template>

<script setup lang="ts">
import ContactMe from '@/components/about-me/ContactMe.vue'
import PhotoCard from '@/components/about-me/PhotoCard.vue'
</script>
