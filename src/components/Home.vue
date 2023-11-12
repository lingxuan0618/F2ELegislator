<template>
  <div class="min-h-screen pt-16">
    <div class="absolute h-1/4" style="z-index: -50;">
      <div class="relative">
        <img src="/src/assets/image/homebg.png" alt="homebg" class="relative">
      </div>
      <div class="absolute tracking-wider w-full" style="top: 350%;">
        <marquee class="transform rotate-9 py-2 text-64 bg-blue font-bold text-white tracking-widest">
          少年立委<img src="/src/assets/image/seal.png" alt="選舉章跑馬燈" class="inline h-10 pb-2">
          清流參選
          凍蒜！凍蒜！
          台灣的明天
          喵先鋪路
        </marquee>
      </div>
    </div>
    <div class="flex justify-center items-center pt-32">
      <img src="/src/assets/image/meow.png" alt="meow">
      <div class="flex flex-col items-center tracking-widest">
        <img src="/src/assets/image/logoGreen.png" alt="meow">
        <h4 class="pt-6 text-9xl text-shadow text-mainBlack">台灣的明天</h4>
        <h4 class="pt-6 text-9xl text-shadow text-mainBlack">喵先鋪路</h4>
        <h4 class="mt-12 px-2 border-2 border-black text-2xl font-bold">2024立委3號參選人 少年立委 勤政愛民 愛您！！</h4>
      </div>
      <div class="pl-10">
        <h6>20</h6>
        <h6>24</h6>
        <h6 class="text-center">|</h6>
        <h6>01</h6>
        <h6 class="text-center">|</h6>
        <h6>13</h6>
        <h6>由</h6>
        <h6>您</h6>
        <h6>選</h6>
        <h6>擇</h6>
        <h6>台</h6>
        <h6>灣</h6>
        <h6>的</h6>
        <h6>未</h6>
        <h6>來</h6>
      </div>
      <div class="pl-3">
        <div class="flex items-center justify-center w-11 h-11 rounded-full
      bg-green text-white font-bold border-2 border-black text-2xl">3</div>
        <div class="flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack
        text-white font-bold border-2 border-black">
          <h4 class="text-2xl">{{day}}</h4>
          <h6 class="text-10">DAY</h6>
        </div>
        <div class="flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack
        text-white font-bold border-2 border-black">
          <h4 class="text-2xl">{{ hour }}</h4>
          <h6 class="text-10">HOUR</h6>
        </div>
        <div class="flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack
        text-white font-bold border-2 border-black">
          <h4 class="text-2xl">{{min}}</h4>
          <h6 class="text-10">MIN</h6>
        </div>
        <div class="flex flex-col items-center justify-center mt-2 w-11 h-11 bg-mainBlack
        text-white font-bold border-2 border-black">
          <h4 class="text-2xl">{{sec}}</h4>
          <h6 class="text-10">SEC</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const sec = ref(0)
const min = ref(0)
const hour = ref(0)
const day = ref(0)

const currentYear = new Date().getFullYear();
const countPresidentialElectionTime = new Date(`January 13 ${currentYear + 1} 00:00:00`);

function reciprocalTime() {
  const timeNow = new Date();
  const reciprocal = countPresidentialElectionTime - timeNow; //得到的是毫秒
  sec.value = Math.floor(reciprocal / 1000) % 60;
  min.value = Math.floor(reciprocal / 1000 / 60) % 60;
  hour.value = Math.floor(reciprocal / 1000 / 60 / 60) % 24;
  day.value = Math.floor(reciprocal / 1000 / 60 / 60 / 24);
}
setInterval(function() {
  reciprocalTime()
},1000);


onMounted(() => {
  reciprocalTime()
})
</script>
<style scoped>
.text-shadow {
  text-shadow:1px 1px #ffdf63, 2px 2px #ffdf63, 5px 3px #333333
}
</style>