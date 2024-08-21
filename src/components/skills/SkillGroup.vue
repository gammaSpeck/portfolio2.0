<template>
  <div class="skill-type">
    <h6 class="heading-tertiary skill-type__heading">{{ props.group }}</h6>

    <div class="skills" ref="container">
      <div v-for="(skill, i) in props.skills" :data-swapy-slot="skill.name">
        <Skill
          :name="skill.name"
          :icon="skill.icon"
          :data-swapy-item="`${skill}-${i}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { createSwapy } from "swapy";

import Skill from "./Skill.vue";

const props = defineProps<{
  group: string;
  skills: {
    name: string;
    icon: string;
  }[];
}>();

const container = ref();

// Swapy is pretty cool. It allows you to easily drag and drop elements within a space
// Checkout: https://swapy.tahazsh.com/
onMounted(() => {
  if (!container) return;
  createSwapy(container.value, { animation: "dynamic", continuousMode: true });
});
</script>
