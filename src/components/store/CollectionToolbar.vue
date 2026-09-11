<script setup lang="ts">
import { ref } from 'vue'
import type { SortKey } from './types'

const props = defineProps<{
  title: string
  count: number
  sort: SortKey
  categories: string[]
  active: string[]
}>()

const emit = defineEmits<{
  (e: 'update:sort', value: SortKey): void
  (e: 'toggle-category', value: string): void
  (e: 'clear'): void
}>()

const panel = ref<'none' | 'sort' | 'refine'>('none')

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'recommended', label: 'Recomendado' },
  { key: 'newest', label: 'Mas reciente' },
  { key: 'oldest', label: 'Mas antiguo' },
  { key: 'az', label: 'A - Z' },
]

function sortLabel() {
  return sortOptions.find((o) => o.key === props.sort)?.label ?? ''
}

function toggle(which: 'sort' | 'refine') {
  panel.value = panel.value === which ? 'none' : which
}

function pickSort(key: SortKey) {
  emit('update:sort', key)
  panel.value = 'none'
}
</script>

<template>
  <div class="bar">
    <div class="bar-row">
      <span class="bar-title">{{ title }} <span class="bar-count">+ {{ count }}</span></span>

      <div class="bar-actions">
        <button type="button" :class="{ on: panel === 'sort' }" @click="toggle('sort')">
          Orden: {{ sortLabel() }}
        </button>
        <button type="button" :class="{ on: panel === 'refine' }" @click="toggle('refine')">
          Filtrar<span v-if="active.length"> ({{ active.length }})</span>
        </button>
      </div>
    </div>

    <div v-if="panel === 'sort'" class="panel">
      <button
        v-for="o in sortOptions"
        :key="o.key"
        type="button"
        class="chip"
        :class="{ on: o.key === sort }"
        @click="pickSort(o.key)"
      >
        {{ o.label }}
      </button>
    </div>

    <div v-else-if="panel === 'refine'" class="panel">
      <button
        v-for="c in categories"
        :key="c"
        type="button"
        class="chip"
        :class="{ on: active.includes(c) }"
        @click="emit('toggle-category', c)"
      >
        {{ c }}
      </button>
      <button v-if="active.length" type="button" class="chip clear" @click="emit('clear')">
        Limpiar
      </button>
    </div>
  </div>
</template>

<style scoped>
.bar {
  position: sticky;
  top: var(--store-header);
  z-index: 10;
  background: var(--store-bg);
  border-bottom: 1px solid var(--store-line);
}

.bar-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 62px;
  padding: 0 var(--store-gutter);
}

.bar-count {
  color: var(--store-muted);
}

.bar-actions {
  display: flex;
  gap: clamp(16px, 2.5vw, 34px);
}

.bar-actions button:hover,
.bar-actions button.on {
  color: var(--store-accent);
}

.panel {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 var(--store-gutter) 18px;
}

.chip {
  padding: 7px 14px;
  border: 1px solid var(--store-line);
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: border-color 0.15s ease-out, color 0.15s ease-out;
}

.chip:hover {
  border-color: var(--store-ink);
}

.chip.on {
  border-color: var(--store-ink);
  color: var(--store-bg);
  background: var(--store-ink);
}

.chip.clear {
  color: var(--store-muted);
}
</style>
