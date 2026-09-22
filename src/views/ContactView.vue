<script setup lang="ts">
import { ref } from 'vue'
import StoreLayout from '@/components/store/StoreLayout.vue'
import { contact } from '@/data/contact'

const copiedLabel = ref<string | null>(null)

async function copyEmail(e: MouseEvent, c: (typeof contact.channels)[number]) {
  if (!c.url.startsWith('mailto:')) return
  e.preventDefault()
  try {
    await navigator.clipboard.writeText(c.value)
    copiedLabel.value = c.label
    setTimeout(() => {
      if (copiedLabel.value === c.label) copiedLabel.value = null
    }, 1800)
  } catch {
    // Sin permiso de portapapeles: deja que el navegador abra el mailto igual.
    window.location.href = c.url
  }
}
</script>

<template>
  <div class="contact">
    <div class="contact-bg" aria-hidden="true"></div>
    <div class="contact-scrim" aria-hidden="true"></div>

    <StoreLayout transparent>
      <section class="panel">
        <span class="store-eyebrow panel-eyebrow">Contacto</span>
        <h1 class="panel-title">{{ contact.heading }}</h1>
        <p class="panel-intro">{{ contact.intro }}</p>

        <ul class="channels">
          <li v-for="c in contact.channels" :key="c.label">
            <a :href="c.url" target="_blank" rel="noopener" @click="copyEmail($event, c)">
              <span class="channel-label">{{ c.label }}</span>
              <span class="channel-value">{{
                copiedLabel === c.label ? 'Copiado' : c.value
              }}</span>
            </a>
          </li>
        </ul>

        <p class="panel-place">{{ contact.location }}</p>
      </section>
    </StoreLayout>
  </div>
</template>

<style scoped>
.contact {
  position: relative;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

.contact :deep(.store) {
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* main ocupa el alto restante: al abrirse el menu se encoge en vez de
   empujar el texto fuera de pantalla, y lo que no cabe sigue alcanzable. */
.contact :deep(main) {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;
}

.contact :deep(main)::-webkit-scrollbar {
  display: none;
}

.contact-bg,
.contact-scrim {
  position: fixed;
  inset: 0;
  z-index: -2;
}

.contact-bg {
  background: #1a1614 url('/contacto.jpg') center / cover no-repeat;
}

/* Oscurece la foto para que el texto en crema sea legible. */
.contact-scrim {
  z-index: -1;
  background: linear-gradient(
    to bottom,
    rgba(20, 16, 14, 0.55) 0%,
    rgba(20, 16, 14, 0.45) 35%,
    rgba(20, 16, 14, 0.82) 100%
  );
}

.panel {
  max-width: 560px;
  padding: clamp(28px, 7vh, 84px) var(--store-gutter) 40px;
  color: var(--cream);
}

.panel-eyebrow {
  color: rgba(241, 240, 226, 0.65);
}

.panel-title {
  margin-top: 14px;
  font-family: 'Drowner', var(--store-font);
  font-size: clamp(2.6rem, 7vw, 5rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.02em;
}

.panel-intro {
  margin: 18px 0 clamp(24px, 4vh, 44px);
  max-width: 42ch;
  line-height: 1.7;
  color: rgba(241, 240, 226, 0.85);
}

.channels {
  list-style: none;
  border-top: 1px solid rgba(241, 240, 226, 0.28);
}

.channels li {
  border-bottom: 1px solid rgba(241, 240, 226, 0.28);
}

.channels a {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  padding: clamp(12px, 1.8vh, 18px) 0;
  transition: color 0.2s ease-out, padding 0.2s ease-out;
}

.channels a:hover,
.channels a:hover .channel-label {
  color: var(--store-accent);
}

.channels a:hover {
  padding-left: 8px;
}

.channel-label {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(241, 240, 226, 0.65);
}

.panel-place {
  margin-top: clamp(20px, 4vh, 40px);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(241, 240, 226, 0.65);
}

@media (min-width: 821px) {
  .panel {
    margin-left: var(--store-gutter);
  }
}
</style>
