<script setup lang="ts">
import StoreLayout from '@/components/store/StoreLayout.vue'
import DetailLayout from '@/components/store/DetailLayout.vue'
import AccordionItem from '@/components/store/AccordionItem.vue'
import { about } from '@/data/about'
</script>

<template>
  <StoreLayout>
    <DetailLayout
      back-to="/sobre-mi"
      back-label="Sobre mi"
      :name="about.name"
      :meta="about.year"
      :tagline="about.intro"
      :tag="about.tag"
      :caption="about.category"
      :variant="2"
    >
      <div class="accs">
        <AccordionItem
          v-for="(s, i) in about.sections"
          :key="s.title"
          :title="s.title"
          :open="i === 0"
        >
          {{ s.body }}
        </AccordionItem>
      </div>
    </DetailLayout>
  </StoreLayout>
</template>
