<script setup>
  import { VideoPlayer } from 'vue-hls-video-player';

  function processPause(progress) {
    console.log(progress)
  }
</script>

<template>
  <div>
    <VideoPlayer
      type="default"
      @pause="processPause"
      previewImageLink="https://www.it-rockstars.com/images/itrlogo.png"
      link="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
      :progress="30"
      :isMuted="false"
      :isControls="true"
      class="customClassName"
      style="width: 50%;"
      
    />
  </div>
  <!--IT-Rockstar Logo Fading Up-->
  <div class="logo-container">
    <img src="/itrlogo_transp_flo.png" alt="IT Rockstars Logo" class="logo" />
  </div>

  <!-- <VideoPlayer
      type="preview"
      previewImageLink="https://www.it-rockstars.com/images/itrlogo.png"
      link="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
      class="customClassName"
  /> -->
</template>

<style>
.logo-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px; /* Adjust width as needed */
  height: auto; /* Allow height to adjust based on image */
  z-index: -1; /* Ensure the logo is behind other content */
}

.logo {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 20%; /* Adjust width as needed */
  opacity: 1; /* Adjust opacity for fading effect */
  animation: fadeInUp 3s ease forwards;
}
</style>