<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import StoreLayout from '@/components/store/StoreLayout.vue'
import DetailLayout from '@/components/store/DetailLayout.vue'
import AccordionItem from '@/components/store/AccordionItem.vue'
import ProductCard from '@/components/store/ProductCard.vue'
import { findProject, projects } from '@/data/projects'

const route = useRoute()
const project = computed(() => findProject(String(route.params.slug)))
const index = computed(() => projects.findIndex((p) => p.slug === project.value?.slug))
const related = computed(() => projects.filter((p) => p.slug !== project.value?.slug).slice(0, 4))
</script>

<template>
  <StoreLayout>
    <template v-if="project">
      <DetailLayout
        back-to="/proyectos"
        back-label="Todos los proyectos"
        :name="project.name"
        :meta="`${project.category} \u2014 ${project.year}`"
        :tagline="project.tagline"
        :tag="project.tag"
        :caption="project.category"
        :variant="index"
      >
        <div class="stack">
          <span v-for="s in project.stack" :key="s" class="stack-chip">{{ s }}</span>
        </div>

        <div class="accs">
          <AccordionItem title="Sobre el proyecto" :open="true">
            {{ project.description }}
          </AccordionItem>
          <AccordionItem title="Rol">
            {{ project.role }}
          </AccordionItem>
          <AccordionItem title="Enlaces">
            <template v-if="project.links.length">
              <a
                v-for="l in project.links"
                :key="l.label"
                class="link"
                :href="l.url"
                target="_blank"
                rel="noopener"
                >{{ l.label }}</a
              >
            </template>
            <span v-else>Aun no hay enlaces publicos.</span>
          </AccordionItem>
        </div>
      </DetailLayout>

      <section class="related">
        <h2 class="store-eyebrow">Tambien podria interesarte</h2>
        <div class="grid">
          <ProductCard
            v-for="(p, i) in related"
            :key="p.slug"
            :to="`/proyectos/${p.slug}`"
            :name="p.name"
            :meta="p.year"
            :caption="p.category"
            :tag="p.tag"
            :variant="i + 1"
          />
        </div>
      </section>
    </template>

    <p v-else class="missing">
      Ese proyecto no existe. <RouterLink to="/proyectos">Volver a la coleccion</RouterLink>
    </p>
  </StoreLayout>
</template>

<style scoped>
.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 34px;
}

.stack-chip {
  padding: 7px 14px;
  border: 1px solid var(--store-line);
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.link {
  display: block;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.related {
  padding: clamp(56px, 7vw, 96px) var(--store-gutter) 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(16px, 1.6vw, 26px) clamp(12px, 1.2vw, 18px);
  margin-top: 18px;
}

.missing {
  padding: 90px var(--store-gutter);
  color: var(--store-muted);
}

.missing a {
  text-decoration: underline;
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
