<script setup lang="ts">
import StoreLayout from '@/components/store/StoreLayout.vue'
import { about } from '@/data/about'
</script>

<template>
  <div class="about">
    <div class="about-bg" aria-hidden="true"></div>
    <div class="about-scrim" aria-hidden="true"></div>

    <StoreLayout transparent>
      <section class="panel">
        <div class="handwritten">
          <img
            src="/note-1.webp"
            alt="Quién soy, escrito a mano por Abraham"
            class="note-page"
            width="1200"
            height="1836"
            loading="eager"
          />
          <img
            src="/note-2.webp"
            alt="Continuación del escrito a mano"
            class="note-page"
            width="1200"
            height="1895"
            loading="lazy"
          />
        </div>

        <p class="panel-place">{{ about.tag }}</p>
      </section>
    </StoreLayout>
  </div>
</template>

<style scoped>
.about {
  position: relative;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

.about :deep(.store) {
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* main ocupa el alto restante: al abrirse el menu se encoge en vez de
   empujar el texto fuera de pantalla, y lo que no cabe sigue alcanzable. */
.about :deep(main) {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;
}

.about :deep(main)::-webkit-scrollbar {
  display: none;
}

.about-bg,
.about-scrim {
  position: fixed;
  inset: 0;
  z-index: -2;
}

/* La foto es vertical: object-position centrado mantiene el sujeto
   visible aunque el recorte horizontal varie con el ancho de pantalla. */
/* 20% en vez de center: el centro geometrico de la foto cae a la altura
   de la camisa, tapando la cara al recortar. Empuja el encuadre hacia
   arriba para que la cara quede visible en cualquier proporcion de pantalla. */
.about-bg {
  background: #1a1614 url('/aboutme.JPG') center 20% / cover no-repeat;
}

.about-scrim {
  z-index: -1;
  /* Movil: oscurece toda la foto un poco mas para que el trazo crema
     tenga contraste, y sigue oscureciendo mas fuerte hacia abajo. */
  background: linear-gradient(
    to bottom,
    rgba(20, 16, 14, 0.45) 0%,
    rgba(20, 16, 14, 0.6) 55%,
    rgba(20, 16, 14, 0.88) 100%
  );
}

.panel {
  max-width: 560px;
  padding: clamp(16px, 3vh, 36px) var(--store-gutter) 40px;
  color: var(--cream);
}

.handwritten {
  margin: 0 0 clamp(24px, 4vh, 40px);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.note-page {
  display: block;
  width: 100%;
  height: auto;
  /* Sombra suave para que el trazo "flote" sobre la foto, como si
     estuviese escrito directamente en la pantalla. */
  filter: drop-shadow(0 1px 10px rgba(0, 0, 0, 0.55));
}

.panel-place {
  margin-top: clamp(20px, 4vh, 40px);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(241, 240, 226, 0.65);
}

/* Desktop: foto horizontal distinta (aboutme.jpeg) en vez de recortar la
   vertical de movil; el degrade y el texto se anclan a la derecha en vez
   de oscurecer toda la pantalla. */
@media (min-width: 821px) {
  .about-bg {
    background-image: url('/aboutme.jpeg');
    /* cover: llena toda la pantalla. Se pierde un poco de nitidez al
       ampliar, pero sin espacios vacios ni recorte de ventana. */
    background-size: cover;
    /* 20% en Y en vez de center: baja el punto de anclaje para no
       cortar la cabeza al recortar verticalmente. */
    /* 8%: empuja el encuadre aun mas arriba (la foto baja mas dentro
       del marco). Anclada a la derecha: el sujeto queda del lado
       contrario al texto, que ahora vive a la izquierda. */
    background-position: right 8%;
  }

  /* Degrade suave hacia negro en el lado izquierdo (donde va el texto);
     la derecha, donde esta la foto, queda sin oscurecer. */
  .about-scrim {
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.55) 70%,
      rgba(0, 0, 0, 0.92) 100%
    );
  }

  .about :deep(main) {
    display: flex;
  }

  /* Sin margin-left:auto: el panel vuelve a su posicion natural, pegado
     a la izquierda, con un margen extra para separarlo del borde. */
  .panel {
    flex-shrink: 0;
    margin-left: var(--store-gutter);
  }
}
</style>
