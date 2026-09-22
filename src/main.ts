import { createApp } from 'vue'
import './assets/main.css'
import './assets/store.css'
import App from './App.vue'
import router from './router'

// El video del hero solo se muestra en "/": precargarlo aqui (en vez de un
// <link preload> fijo en index.html) evita que las demas rutas descarguen
// 14MB de video que nunca van a reproducir.
if (window.location.pathname === '/') {
  const preload = document.createElement('link')
  preload.rel = 'preload'
  preload.as = 'video'
  preload.type = 'video/mp4'
  preload.href = '/1.mp4'
  document.head.appendChild(preload)
}

createApp(App).use(router).mount('#app')
