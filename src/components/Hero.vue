<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(defineProps<{ active: boolean; instant?: boolean }>(), {
  instant: false,
})
const emit = defineEmits<{ (e: 'opened'): void }>()

const finished = ref(props.instant)

onMounted(() => {
  if (props.instant) emit('opened')
})

function onTransitionEnd(e: TransitionEvent) {
  if (e.propertyName === 'width' && props.active) {
    finished.value = true
    emit('opened')
  }
}
</script>

<template>
  <div class="hero">
    <div class="iris" :class="{ open: active, 'no-anim': instant }" @transitionend="onTransitionEnd">
      <!-- loop nativo: reinicia sin el corte que provocaba rebobinar desde JS. -->
      <video class="hero-video" autoplay loop muted playsinline preload="auto">
        <source src="/1.mp4" type="video/mp4" />
      </video>
      <div class="iris-border" :class="{ hidden: finished }"></div>
    </div>

    <nav class="nav" :class="{ visible: finished }">
      <RouterLink to="/proyectos" class="nav-link">proyectos</RouterLink>
      <RouterLink to="/sobre-mi" class="nav-link">sobre mi</RouterLink>
      <RouterLink to="/contacto" class="nav-link">contacto</RouterLink>
    </nav>

    <div class="scroll-hint" :class="{ visible: finished }">
      <svg viewBox="0 0 24 24" class="icon-diamond">
        <rect x="7" y="7" width="10" height="10" transform="rotate(45 12 12)" fill="none" stroke="#fff" stroke-width="1.5" />
      </svg>
      <svg viewBox="0 0 24 24" class="icon-chevron">
        <path d="M6 9 L12 15 L18 9" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
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
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
  overflow: hidden;
  transition: width 2.5s cubic-bezier(0.16, 1, 0.3, 1), height 2.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.iris.no-anim {
  transition: none;
}

.iris.open {
  width: 100%;
  height: 100%;
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

.scroll-hint {
  position: absolute;
  top: 3vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2vh;
  padding: 0.6vh 1vw;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 1vw;
  opacity: 0;
  transition: opacity 0.6s ease-out;
}

.scroll-hint.visible {
  opacity: 1;
}

.icon-diamond,
.icon-chevron {
  width: 1.2vw;
  height: 1.2vw;
  min-width: 14px;
  min-height: 14px;
}

@media (max-width: 640px) {
  .nav {
    left: 7vw;
    gap: 7vh;
  }

  .nav-link {
    font-size: clamp(2rem, 11vw, 3.2rem);
  }

  .scroll-hint {
    top: 2vh;
    padding: 0.5vh 3vw;
    border-radius: 3vw;
  }

  .icon-diamond,
  .icon-chevron {
    width: 4vw;
    height: 4vw;
  }
}
</style>
