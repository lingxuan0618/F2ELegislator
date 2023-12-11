<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Advocate from './components/Advocate.vue'
import News from './components/News.vue'
import Policy from './components/Policy.vue'
import SupportUs from './components/SupportUs.vue'
import ContactUs from './components/ContactUs.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header></Header>
  <div class="relative">
    <div class="fixed bottom-80 left-0">
      <h6 class="relative transform -rotate-90">Miao Li-Han © 2023 Copyright. All Rights Reserved
        <div class="fixed" style="left: 55%;top: -480%;">
          <!-- 參考 https://svg-tutorial.com/ -->
          <svg width="260" height="260" viewBox="-100 -100 200 200" class="rotateText">
            <defs>
              <path id="text-arc" d="M 0, 50 A 50 50 0 1 1 1,50" />
            </defs>
            <text
              fill="#000000"
              letter-spacing="0.25rem"
              font-size="0.7rem"
            >
              <textPath href="#text-arc">
                台灣的未來˙由您選擇&nbsp; 台灣的未來˙由您選擇&nbsp;
              </textPath>
            </text>
          </svg>
        </div>
      </h6>
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
.rotateText {
    animation: rotateTextInfinite 10s linear infinite;
  }
@keyframes rotateTextInfinite {
  0%{ 
    transform: rotate(0deg)
  }
  50% {  
    transform:rotate(180deg);
  }
  100% {  
    transform:rotate(360deg);
  }
}
</style>
