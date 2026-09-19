<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProductMedia from './ProductMedia.vue'

defineProps<{
  to: string
  name: string
  meta: string
  caption?: string
  tag?: string
  image?: string
  fit?: 'cover' | 'contain'
  variant?: number
}>()
</script>

<template>
  <RouterLink class="card" :to="to">
    <div class="card-media">
      <span v-if="tag" class="card-tag">{{ tag }}</span>
      <ProductMedia :name="name" :caption="caption" :image="image" :fit="fit" :variant="variant" />
    </div>

    <div class="card-row">
      <span class="card-name">{{ name }}</span>
      <span class="card-meta">{{ meta }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  display: block;
}

.card-media {
  position: relative;
}

.card-tag {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 1;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--store-ink);
}

.card-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 2px 0;
}

.card-name {
  text-decoration: underline;
  text-decoration-color: transparent;
  text-underline-offset: 3px;
  transition: text-decoration-color 0.2s ease-out;
}

.card:hover .card-name,
.card:focus-visible .card-name {
  text-decoration-color: currentColor;
}

.card-meta {
  color: var(--store-ink);
  white-space: nowrap;
}
</style>
