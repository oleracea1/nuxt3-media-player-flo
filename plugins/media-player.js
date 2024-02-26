// Adjusted import statement to import runtime Nuxt composables
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp.head) {
    nuxtApp.head.script.push({
      src: 'https://cdn.rawgit.com/video-dev/hls.js/18bb552/dist/hls.min.js',
    });

    nuxtApp.head.link.push({
      rel: 'stylesheet',
      href: 'https://cdn.plyr.io/3.7.2/plyr.css',
    });
  }
});
