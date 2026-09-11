<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{ (e: 'done'): void }>()

const progress = ref(0)
const DURATION_MS =4000
const BAR_LENGTH = 10

onMounted(() => {
  const start = performance.now()

  function tick(now: number) {
    const elapsed = now - start
    const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100))
    progress.value = pct

    if (pct < 100) {
      requestAnimationFrame(tick)
    } else {
      setTimeout(() => emit('done'), 900)
    }
  }

  requestAnimationFrame(tick)
})

const bars = () => {
  const filled = Math.round((progress.value / 100) * BAR_LENGTH)
  return '|'.repeat(filled).padEnd(BAR_LENGTH, ' ')
}

const CROWN_PATH =
  'M 36 20 L 38 4 L 46 17 L 51 1 L 59 18 L 65 2 L 71 19 L 70 23 L 38 22 Z'

const HALO_PATH =
  'M 33 24 C 40 18, 65 18, 72 25'

const BOX_PATH = 'M 60 68 L 61 93 L 90 94 L 89 67 Z'

const HEART_PATH =
  'M 75 78 C 73 73, 63 74, 63 82 C 63 90, 75 96, 75 96 C 75 96, 87 90, 87 82 C 87 74, 77 73, 75 78 Z'

const LOGO_PATH =
  'M 11 67 L 8 90 M 18.5 65.5 L 15.5 91.5 M 26 66 L 23.5 89 M 6 79 L 29 76'

const SPLATTER_DOTS = [
  { cx: 34, cy: 2, r: 0.9 },
  { cx: 74, cy: 8, r: 0.7 },
  { cx: 78, cy: 26, r: 0.6 },
  { cx: 26, cy: 33, r: 0.8 },
  { cx: 80, cy: 40, r: 0.5 },
  { cx: 24, cy: 46, r: 0.6 },
]
</script>

<template>
  <div class="welcome">
    <div class="portrait-frame">
      <img
        class="portrait"
        src="/Untitled Project (6).png"
        alt="AVRAN"
      />

      <svg
        class="face-graffiti"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="spray" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="messyFill" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.25" numOctaves="3" seed="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <pattern id="scribbleFillOrange" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(16)">
            <path d="M -1 1.5 L 8 0.5 M -1 4 L 8 3.5 M -1 6.8 L 8 7.5" stroke="#f2a71b" stroke-width="1.1" stroke-linecap="round" />
          </pattern>
          <pattern id="scribbleFillRed" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-13)">
            <path d="M -1 1.5 L 8 0.5 M -1 4 L 8 3.5 M -1 6.8 L 8 7.5" stroke="#a11e1e" stroke-width="1.1" stroke-linecap="round" />
          </pattern>
        </defs>
        <path
          class="crown"
          :class="{ filled: progress >= 100 }"
          :d="CROWN_PATH"
          pathLength="100"
          :style="{ strokeDasharray: 100, strokeDashoffset: 100 - progress }"
        />
        <path
          class="halo"
          :d="HALO_PATH"
          pathLength="100"
          :style="{ strokeDasharray: 100, strokeDashoffset: 100 - progress }"
        />
        <path
          class="logo"
          :d="LOGO_PATH"
          pathLength="100"
          :style="{ strokeDasharray: 100, strokeDashoffset: 100 - progress }"
        />
        <path
          class="box"
          :d="BOX_PATH"
          pathLength="100"
          :style="{ strokeDasharray: 100, strokeDashoffset: 100 - progress }"
        />
        <path
          class="heart"
          :class="{ filled: progress >= 100 }"
          :d="HEART_PATH"
          pathLength="100"
          :style="{ strokeDasharray: 100, strokeDashoffset: 100 - progress }"
        />
        <circle
          v-for="(dot, i) in SPLATTER_DOTS"
          :key="i"
          class="splatter"
          :cx="dot.cx"
          :cy="dot.cy"
          :r="dot.r"
          :style="{ opacity: progress > (i + 1) * (100 / SPLATTER_DOTS.length) ? 1 : 0 }"
        />
      </svg>
    </div>

    <div class="caption">
      <p class="title">AVRAN'S PORTFOLIO</p>
      <p class="loader">
        <span class="bars">{{ bars() }}</span>
        <span class="percent">{{ progress }}%</span>
      </p>
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

.welcome {
  position: relative;
  isolation: isolate;
  width: 100%;
  height: 100%;
  background-color: #980000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.portrait-frame {
  position: relative;
  z-index: 1;
  width: min(45vw, 45vh);
  aspect-ratio: 1 / 1;
  border: max(2px, 0.4vw) solid #ffffff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c0c0c0;
  box-shadow: -1.2vw 1vw 2vw rgba(0, 0, 0, 0.45);
}

.portrait-frame::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.22;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch' result='noise'/%3E%3CfeColorMatrix in='noise' type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 5 -2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 150px 150px;
}

.portrait {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.15);
}

.face-graffiti {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.face-graffiti path {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.face-graffiti .crown {
  stroke: #f2a71b;
  stroke-width: 1.8;
  fill: url(#scribbleFillOrange);
  fill-opacity: 0;
  transition: fill-opacity 0.4s ease-out 0.3s;
  filter: url(#messyFill) drop-shadow(0 0 0.4px #f2a71b);
}

.face-graffiti .crown.filled {
  fill-opacity: 0.9;
}

.face-graffiti .halo {
  stroke: #ffffff;
  stroke-width: 1.4;
  filter: url(#spray) drop-shadow(0 0 0.3px #ffffff);
}

.face-graffiti .splatter {
  fill: #f2a71b;
  transition: opacity 0.15s ease-out;
}

.face-graffiti .logo {
  stroke: #ffffff;
  stroke-width: 2.6;
  filter: url(#spray) drop-shadow(0 0 0.3px #ffffff);
}

.face-graffiti .box {
  stroke: #ffffff;
  stroke-width: 1.4;
  filter: url(#spray) drop-shadow(0 0 0.3px #ffffff);
}

.face-graffiti .heart {
  stroke: #a11e1e;
  stroke-width: 1.2;
  fill: url(#scribbleFillRed);
  fill-opacity: 0;
  transition: fill-opacity 0.4s ease-out 0.3s;
  filter: url(#messyFill) drop-shadow(0 0 0.4px #a11e1e);
}

.face-graffiti .heart.filled {
  fill-opacity: 0.9;
}

.caption {
  position: relative;
  z-index: 1;
  margin-top: 4vh;
  text-align: center;
  color: #ffffff;
  font-family: 'Drowner', sans-serif;
}

.title {
  font-size: clamp(1.2rem, 3vw, 2rem);
  letter-spacing: 0.05em;
  margin: 0 0 1vh 0;
}

.loader {
  font-size: clamp(1rem, 2vw, 1.4rem);
  display: flex;
  gap: 0.5em;
  justify-content: center;
  white-space: pre;
  margin: 0;
}

@media (max-width: 640px) {
  .portrait-frame {
    /* En vertical 45vw dejaba el retrato diminuto. */
    width: min(74vw, 44vh);
    box-shadow: -4vw 3vw 7vw rgba(0, 0, 0, 0.45);
  }

  .caption {
    margin-top: 3vh;
  }

  .title {
    font-size: clamp(1.1rem, 6vw, 1.6rem);
  }

  .loader {
    font-size: clamp(0.9rem, 4.5vw, 1.2rem);
  }
}
</style>
