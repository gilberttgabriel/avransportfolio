<script setup lang="ts">
defineProps<{ videoId: string; title: string }>()
</script>

<template>
  <div class="yt">
    <iframe
      class="yt-frame"
      :src="`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`"
      :title="title"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.yt {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--store-tile);
  overflow: hidden;
}

.yt-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
