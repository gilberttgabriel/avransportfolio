<script setup lang="ts">
import { ref } from 'vue'
import Welcome from './components/Welcome.vue'
import Hero from './components/Hero.vue'

const showWelcome = ref(true)
const heroActive = ref(false)

function onWelcomeDone() {
  heroActive.value = true
}

function onHeroOpened() {
  showWelcome.value = false
}
</script>

<template>
  <div class="stage">
    <Welcome v-if="showWelcome" @done="onWelcomeDone" />
    <Hero :active="heroActive" @opened="onHeroOpened" />
  </div>
</template>

<style scoped>
.stage {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
