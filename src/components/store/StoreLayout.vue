<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

withDefaults(defineProps<{ transparent?: boolean }>(), { transparent: false })

const route = useRoute()
const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/contacto', label: 'Contacto' },
]
</script>

<template>
  <div class="store" :class="{ 'store-over': transparent, 'menu-open': menuOpen }">
    <header class="head">
      <button
        class="burger"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ x: menuOpen }"></span>
        <span :class="{ x: menuOpen }"></span>
        <span :class="{ x: menuOpen }"></span>
      </button>

      <RouterLink class="wordmark" to="/">
        <span class="wordmark-icon" aria-hidden="true"></span>
        AVRAN
      </RouterLink>
    </header>

    <div class="menu-wrap" :class="{ open: menuOpen }">
      <div class="menu-clip">
        <nav class="menu" :aria-hidden="!menuOpen">
          <RouterLink
            v-for="l in links"
            :key="l.to"
            class="menu-link"
            :to="l.to"
            :tabindex="menuOpen ? 0 : -1"
          >
            {{ l.label }}
          </RouterLink>
        </nav>
      </div>
    </div>

    <main>
      <slot />
    </main>

    <footer v-if="!transparent" class="foot">
      <span>AVRAN &copy; {{ new Date().getFullYear() }}</span>
      <RouterLink to="/sobre-mi">Sobre mí</RouterLink>
      <a class="credit" href="https://gilbertosworldwideweb.com" target="_blank" rel="noopener">
        desarrollado por Gilbert
        <img src="/bygilbert.png" alt="" class="credit-icon" aria-hidden="true" />
      </a>
    </footer>
  </div>
</template>

<style scoped>
.head {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  height: var(--store-header);
  padding: 0 var(--store-gutter);
  background: var(--store-bg);
  border-bottom: 1px solid var(--store-line);
}

.burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 26px;
  height: 26px;
}

.burger span {
  display: block;
  height: 1.5px;
  width: 100%;
  background: var(--store-ink);
  transition: transform 0.25s ease-out, opacity 0.2s ease-out;
}

.burger span.x:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.burger span.x:nth-child(2) {
  opacity: 0;
}

.burger span.x:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

.wordmark {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: 'Drowner', var(--store-font);
  font-size: clamp(1.3rem, 2.2vw, 1.8rem);
  letter-spacing: 0.1em;
  line-height: 1;
}

/* Mascara en vez de <img>: toma el color del texto (currentColor),
   asi se adapta solo entre modo claro y modo transparente sobre foto. */
.wordmark-icon {
  width: 0.85em;
  height: 0.85em;
  background-color: currentColor;
  -webkit-mask: url('/favicon.png') center / contain no-repeat;
  mask: url('/favicon.png') center / contain no-repeat;
  flex-shrink: 0;
}

/* Animar grid-template-rows de 0fr a 1fr da una altura fluida sin
   conocer de antemano cuanto mide el menu: el contenido baja acompanando. */
.menu-wrap {
  position: sticky;
  top: var(--store-header);
  z-index: 19;
  display: grid;
  grid-template-rows: 0fr;
  background: var(--store-bg);
  transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-wrap.open {
  grid-template-rows: 1fr;
}

.menu-clip {
  min-height: 0;
  overflow: hidden;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 22px var(--store-gutter) 28px;
  border-bottom: 1px solid var(--store-line);
}

.menu-link {
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.3s ease-out, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-wrap.open .menu-link {
  opacity: 1;
  transform: none;
}

.menu-wrap.open .menu-link:nth-child(2) {
  transition-delay: 0.05s;
}

.menu-wrap.open .menu-link:nth-child(3) {
  transition-delay: 0.1s;
}

.menu-wrap.open .menu-link:nth-child(4) {
  transition-delay: 0.15s;
}

.menu-link {
  font-family: 'Drowner', var(--store-font);
  font-size: clamp(1.6rem, 3.4vw, 2.6rem);
  line-height: 1.25;
  width: fit-content;
}

.menu-link:hover,
.menu-link.router-link-active {
  color: var(--store-accent);
}

.foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px 16px;
  padding: 40px var(--store-gutter);
  margin-top: 60px;
  border-top: 1px solid var(--store-line);
  color: var(--store-muted);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.foot a:hover {
  color: var(--store-ink);
}

/* Modo sobre foto: la chrome flota encima sin fondo propio. */
.store-over {
  color: var(--cream);
  background: transparent;
}

.store-over .head {
  background: transparent;
  border-bottom-color: rgba(241, 240, 226, 0.28);
}

/* Sobre la foto el desplegable es transparente: el contenido baja con el. */
.store-over .menu-wrap {
  background: transparent;
}

.store-over .menu {
  border-bottom-color: rgba(241, 240, 226, 0.28);
}

.store-over .menu-link:hover,
.store-over .menu-link.router-link-active {
  color: var(--store-accent);
}

.store-over .burger span {
  background: var(--cream);
}

/* Estatico dentro del footer del documento, no flotante: no puede
   taparle taps a nada del resto de la pagina. */
.credit {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--store-muted);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.credit:hover {
  color: var(--store-ink);
}

.credit-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  object-fit: contain;
}
</style>
