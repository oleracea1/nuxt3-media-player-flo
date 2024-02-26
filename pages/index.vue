<template>
  <div>
   <NuxtLink to="/video">
    <b>HLS Video Streaming</b>
  </NuxtLink>
  </div>
  <!--IT-Rockstar Logo Fading Up-->
  <div class="logo-container">
    <img src="/itrlogo_transp_flo.png" alt="IT Rockstars Logo" class="logo" />
  </div>
  
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

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
}
</style>