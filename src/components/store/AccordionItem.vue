<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{ title: string; open?: boolean }>(), { open: false })

const isOpen = ref(props.open)
</script>

<template>
  <div class="acc">
    <button class="acc-head" type="button" :aria-expanded="isOpen" @click="isOpen = !isOpen">
      <span>{{ title }}</span>
      <span class="acc-sign">{{ isOpen ? '\u2212' : '+' }}</span>
    </button>
    <div v-show="isOpen" class="acc-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.acc {
  border-top: 1px solid var(--store-line);
}

.acc:last-child {
  border-bottom: 1px solid var(--store-line);
}

.acc-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 18px 0;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.acc-sign {
  color: var(--store-muted);
}

.acc-body {
  padding: 0 0 22px;
  line-height: 1.7;
  color: #43423f;
}
</style>
