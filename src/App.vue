<script setup>
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="relative">
    <div class="transform -rotate-90 fixed bottom-80 left-0">
      <h6>台灣的未來，由您選擇!台灣的未來，由您選擇!</h6>
      <h6>Miao Li-Han © 2023 Copyright. All Rights Reserved</h6>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
