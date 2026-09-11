<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Texto grande del "producto". Se usan sus iniciales. */
    name: string
    caption?: string
    /** Ruta a una imagen real. Si existe, sustituye al marcador. */
    image?: string
    variant?: number
  }>(),
  { variant: 0 },
)

const initials = computed(() =>
  props.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase(),
)

const mark = computed(() => props.variant % 3)
</script>

<template>
  <div class="media">
    <img v-if="image" class="media-img" :src="image" :alt="name" />

    <template v-else>
      <svg class="media-mark" viewBox="0 0 120 120" aria-hidden="true">
        <circle v-if="mark === 0" cx="60" cy="60" r="44" />
        <rect v-else-if="mark === 1" x="22" y="22" width="76" height="76" />
        <path v-else d="M60 14 L106 60 L60 106 L14 60 Z" />
      </svg>
      <span class="media-initials">{{ initials }}</span>
      <span v-if="caption" class="media-caption">{{ caption }}</span>
    </template>
  </div>
</template>

<style scoped>
.media {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1 / 1.17;
  background: var(--store-tile);
  overflow: hidden;
}

.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media-mark {
  position: absolute;
  width: 46%;
  height: 46%;
  fill: none;
  stroke: #cfccb6;
  stroke-width: 1.5;
}

.media-initials {
  position: relative;
  font-family: 'Drowner', var(--store-font);
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 1;
  color: var(--store-ink);
}

.media-caption {
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--store-muted);
}
</style>
