<template>
<div class="flex p-6 bg-mainYellow">
  <div class="flex items-center justify-end w-6/12 pr-8">
    <div class="mr-2 border-2 border-black">
      <div class="flex items-center">
        <div class="w-1/4 mx-4">
          <img src="/src/assets/image/seal.png" alt="選舉章">
        </div>
        <div class="flex items-center w-3/4 p-2 border-l-2 border-black">
          <div class="pl-4">
            <h4>好</h4>
            <h4>喵</h4>
          </div>
          <h4 class="px-6 text-mainBlack text-7xl">3</h4>
        </div>
      </div>
      <div class="relative p-1 text-xs text-center border-t-2 border-black tracking-widest cursor-pointer"
      @click="clickValue = !clickValue">
        點擊我就喵喵叫給你聽
        <div v-if="clickValue === true">
          <div class="absolute text-center border-2 rounded pl-1" style="top:150%;right:15%">
            喵喵
          </div>
          <div class="absolute text-center border-2 rounded pl-1" style="top:250%;right:0%">
            投我
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 px-8 border-2 border-black tracking-widest">
      <h4 class="pb-2 text-4xl text-mainBlack">喵立翰</h4>
      <h4 class="text-xl text-center">少年立委</h4>
    </div>
  </div>
  <div class="w-6/12 tracking-wider">
    <marquee class="text-40 ml-20 font-bold">凍蒜! 凍蒜! <span>TAIWAN NO.1</span>   2024 VOTE NO.3</marquee>
    <marquee class="text-40 ml-10 font-bold"><span>ELECTIONS</span>少年立委 清流參選 台灣的未來，差您一票</marquee>
    <marquee class="text-64 ml-16 font-bold">TAIWAN NO.1<span class="pl-4">ELECTIONS 凍蒜！凍蒜！</span></marquee>
  </div>
</div>
<div class="flex justify-evenly p-8 bg-mainBlack text-white">
  <div>
    <p class="pb-2 text-2xl">競選總部</p>
    <h4>地址：台灣喵星區</h4>
    <h4>毛茸茸大道88號，喵喵大樓3樓</h4>
  </div>
  <div class="flex flex-col justify-end">
    <h4>電話：(02) 888-5678</h4>
    <h4>電子郵件地址: meowoffice@linmeow.tw</h4>
  </div>
  <div class="flex items-end text-2xl">
    <font-awesome-icon icon="fa-brands fa-facebook" class="p-2" />
    <font-awesome-icon icon="fa-brands fa-instagram" class="p-2" />
    <font-awesome-icon icon="fa-brands fa-x-twitter" class="p-2" />
    <!-- <font-awesome-icon icon="fa-solid fa-arrow-right" class="p-2"/>
    <font-awesome-icon icon="fa-solid fa-arrow-left" class="p-2"/> -->
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue'
const clickValue = ref(false)
</script>
<style lang="scss" scoped>
  span {
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    color: #FFBB18;
  }
</style>

