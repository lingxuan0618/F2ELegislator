<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Advocate from './components/Advocate.vue'
import News from './components/News.vue'
import Policy from './components/Policy.vue'
import SupportUs from './components/SupportUs.vue'
import ContactUs from './components/ContactUs.vue'
import Footer from './components/Footer.vue'
import RotateText from './components/RotateText.vue'
</script>

<template>
  <Header></Header>
  <div class="relative">
    <div class="fixed bottom-80 left-0">
    <!-- <RotateText></RotateText> -->
      <!-- <h6>台灣的未來，由您選擇!台灣的未來，由您選擇!</h6> -->
      <h6 class="transform -rotate-90">Miao Li-Han © 2023 Copyright. All Rights Reserved</h6>
    </div>
  </div>
  <Home></Home>
  <Advocate></Advocate>
  <News></News>
  <Policy></Policy>
  <SupportUs></SupportUs>
  <ContactUs></ContactUs>
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
