<script setup lang="ts">
import { ref } from 'vue'
import Welcome from '@/components/Welcome.vue'
import Hero from '@/components/Hero.vue'

const INTRO_KEY = 'avran:intro-seen'
const introSeen = sessionStorage.getItem(INTRO_KEY) === '1'

const showWelcome = ref(!introSeen)
const heroActive = ref(introSeen)

function onWelcomeDone() {
  heroActive.value = true
}

function onHeroOpened() {
  showWelcome.value = false
  sessionStorage.setItem(INTRO_KEY, '1')
}
</script>

<template>
  <div class="stage">
    <Welcome v-if="showWelcome" @done="onWelcomeDone" />
    <Hero :active="heroActive" :instant="introSeen" @opened="onHeroOpened" />
  </div>
</template>

<style scoped>
.stage {
  position: relative;
  width: 100%;
  /* dvh descuenta la barra del navegador movil; vh la ignora y desborda. */
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}
</style>
