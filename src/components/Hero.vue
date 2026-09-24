<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(defineProps<{ active: boolean; instant?: boolean }>(), {
  instant: false,
})
const emit = defineEmits<{ (e: 'opened'): void }>()

const finished = ref(props.instant)
const videoEl = ref<HTMLVideoElement | null>(null)

// El video no lleva "autoplay": preload="auto" lo deja bufferizando en
// segundo plano (oculto tras el clip-path) mientras dura el welcome, pero
// no arranca a reproducirse hasta que el iris empieza a abrirse. Asi el
// primer fotograma que se ve siempre coincide con el inicio de la
// animacion, igual en desktop que en movil, en vez de llegar ya avanzado.
function playFromStart() {
  const v = videoEl.value
  if (!v) return
  v.currentTime = 0
  v.play().catch(() => {})
}

onMounted(() => {
  if (props.instant) {
    emit('opened')
    playFromStart()
  }
})

watch(
  () => props.active,
  (active) => {
    if (active && !props.instant) playFromStart()
  },
)

function onTransitionEnd(e: TransitionEvent) {
  if (e.propertyName === 'clip-path' && props.active) {
    finished.value = true
    emit('opened')
  }
}
</script>

<template>
  <div class="hero">
    <div class="iris" :class="{ open: active, 'no-anim': instant }" @transitionend="onTransitionEnd">
      <!-- loop nativo: reinicia sin el corte que provocaba rebobinar desde JS. -->
      <video
        ref="videoEl"
        class="hero-video"
        loop
        muted
        playsinline
        webkit-playsinline="true"
        preload="auto"
      >
        <source src="/1.mp4" type="video/mp4" />
      </video>
      <div class="iris-border" :class="{ hidden: finished }"></div>
    </div>

    <nav class="nav" :class="{ visible: finished }">
      <RouterLink to="/proyectos" class="nav-link">proyectos</RouterLink>
      <RouterLink to="/sobre-mi" class="nav-link">sobre mí</RouterLink>
      <RouterLink to="/contacto" class="nav-link">contacto</RouterLink>
    </nav>

  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Drowner';
  src: url('@/assets/fonts/Drowner-Free.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

.hero {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.iris {
  /* Siempre a tamano completo: el efecto de apertura es un recorte visual
     (clip-path), no el tamano real del contenedor. Un <video> renderizado
     a 0x0 hace que Safari en iOS rechace el autoplay y muestre el boton
     de play nativo como respaldo; con clip-path el video nunca mide cero. */
  position: absolute;
  inset: 0;
  clip-path: inset(50% round 0);
  transition: clip-path 2.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.iris.no-anim {
  transition: none;
}

.iris.open {
  clip-path: inset(0 round 0);
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.iris-border {
  position: absolute;
  inset: 0;
  border: max(2px, 0.4vw) solid #ff2b2b;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.4s ease-out;
}

.iris-border.hidden {
  opacity: 0;
}

.nav {
  position: absolute;
  left: 9vw;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 16vh;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.6s ease-out;
}

.nav.visible {
  opacity: 1;
  pointer-events: auto;
}

.nav-link {
  font-family: 'Drowner', sans-serif;
  font-size: clamp(2.5rem, 5vw, 5rem);
  color: var(--cream, #f1f0e2);
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: opacity 0.2s ease-out;
}

.nav-link:hover {
  opacity: 0.6;
}

@media (max-width: 640px) {
  .nav {
    left: 7vw;
    gap: 7vh;
  }

  .nav-link {
    font-size: clamp(2rem, 11vw, 3.2rem);
  }

}
</style>
