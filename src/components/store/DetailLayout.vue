<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProductMedia from './ProductMedia.vue'

defineProps<{
  backTo: string
  backLabel: string
  name: string
  meta: string
  tagline: string
  tag?: string
  caption?: string
  image?: string
  variant?: number
}>()
</script>

<template>
  <article class="pdp">
    <div class="pdp-media">
      <ProductMedia :name="name" :caption="caption" :image="image" :variant="variant" />
    </div>

    <div class="pdp-info">
      <RouterLink class="pdp-back" :to="backTo">&larr; {{ backLabel }}</RouterLink>

      <span v-if="tag" class="store-eyebrow pdp-tag">{{ tag }}</span>
      <h1 class="pdp-name">{{ name }}</h1>
      <p class="pdp-meta">{{ meta }}</p>
      <p class="pdp-tagline">{{ tagline }}</p>

      <slot />
    </div>
  </article>
</template>

<style scoped>
.pdp {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 64px);
  padding: clamp(24px, 3vw, 44px) var(--store-gutter) 0;
}

.pdp-media :deep(.media) {
  aspect-ratio: 1 / 1.1;
}

.pdp-info {
  padding-top: 6px;
}

.pdp-back {
  display: inline-block;
  margin-bottom: 26px;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--store-muted);
}

.pdp-back:hover {
  color: var(--store-ink);
}

.pdp-tag {
  display: block;
  margin-bottom: 10px;
  color: var(--store-accent);
}

.pdp-name {
  font-family: 'Drowner', var(--store-font);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.02em;
}

.pdp-meta {
  margin-top: 12px;
  color: var(--store-muted);
}

.pdp-tagline {
  margin: 18px 0 30px;
  line-height: 1.7;
  max-width: 46ch;
}

@media (max-width: 820px) {
  .pdp {
    grid-template-columns: 1fr;
  }
}
</style>
