<script setup lang="ts">
import StoreLayout from '@/components/store/StoreLayout.vue'
import ProductCard from '@/components/store/ProductCard.vue'
import { about } from '@/data/about'
</script>

<template>
  <StoreLayout>
    <div class="bar">
      <span>Sobre mi <span class="count">+ 1</span></span>
      <span class="note">Edicion unica</span>
    </div>

    <div class="single">
      <ProductCard
        :to="`/sobre-mi/${about.slug}`"
        :name="about.name"
        :meta="about.year"
        :caption="about.category"
        :tag="about.tag"
      />
      <p class="blurb">{{ about.tagline }}</p>
    </div>
  </StoreLayout>
</template>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 62px;
  padding: 0 var(--store-gutter);
  border-bottom: 1px solid var(--store-line);
}

.count {
  color: var(--store-muted);
}

.note {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--store-muted);
}

.single {
  max-width: 420px;
  margin: 0 auto;
  padding: clamp(32px, 6vw, 80px) var(--store-gutter) 0;
  text-align: center;
}

.blurb {
  margin-top: 16px;
  color: var(--store-muted);
  line-height: 1.7;
}
</style>
