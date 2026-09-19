<script setup lang="ts">
import { computed, ref } from 'vue'
import StoreLayout from '@/components/store/StoreLayout.vue'
import CollectionToolbar from '@/components/store/CollectionToolbar.vue'
import type { SortKey } from '@/components/store/types'
import ProductCard from '@/components/store/ProductCard.vue'
import { categories, projects } from '@/data/projects'

const sort = ref<SortKey>('recommended')
const active = ref<string[]>([])

function toggleCategory(c: string) {
  active.value = active.value.includes(c)
    ? active.value.filter((x) => x !== c)
    : [...active.value, c]
}

const visible = computed(() => {
  const list = active.value.length
    ? projects.filter((p) => active.value.includes(p.category))
    : [...projects]

  switch (sort.value) {
    case 'newest':
      return list.sort((a, b) => b.year.localeCompare(a.year))
    case 'oldest':
      return list.sort((a, b) => a.year.localeCompare(b.year))
    case 'az':
      return list.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return list
  }
})
</script>

<template>
  <StoreLayout>
    <CollectionToolbar
      title="Todos los proyectos"
      :count="visible.length"
      :sort="sort"
      :categories="categories"
      :active="active"
      @update:sort="sort = $event"
      @toggle-category="toggleCategory"
      @clear="active = []"
    />

    <div class="grid">
      <ProductCard
        v-for="(p, i) in visible"
        :key="p.slug"
        :to="`/proyectos/${p.slug}`"
        :name="p.name"
        :meta="p.year"
        :caption="p.category"
        :tag="p.tag"
        :image="p.images?.[0]"
        :fit="p.imageFit"
        :variant="i"
      />
    </div>

    <p v-if="!visible.length" class="empty">No hay proyectos en esa categoria.</p>
  </StoreLayout>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(16px, 1.6vw, 26px) clamp(12px, 1.2vw, 18px);
  padding: clamp(16px, 2vw, 28px) var(--store-gutter) 0;
}

.empty {
  padding: 60px var(--store-gutter);
  color: var(--store-muted);
}

@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
