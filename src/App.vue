<script setup lang="ts">
import { watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()

/* Home y contacto ocupan exactamente una pantalla; el resto de la tienda scrollea. */
watch(
  () => route.name,
  (name) => {
    const lock = name === 'home' || name === 'contacto'
    document.documentElement.classList.toggle('lock-scroll', lock)
    document.body.classList.toggle('lock-scroll', lock)
  },
  { immediate: true },
)
</script>

<template>
  <RouterView />
</template>
