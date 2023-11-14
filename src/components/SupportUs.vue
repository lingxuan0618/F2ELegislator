<template>
  <div id="support" class="flex bg-image min-h-screen">
    <div class="flex-1">
      <img src="/src/assets/image/product.png" alt="product">
    </div>
    <div class="pt-28">
      <div class="relative w-full">
        <h1 class="text-64 text-white">小額捐款</h1>
        <h1 class="absolute text-yellow text-92 font-light tracking-wider w-full" style="top:-70%">SUPPORT US</h1>
      </div>
      <div class="text-white text-sm pt-20 tracking-wider">
        <p>邀請您一同加入保證金募資專案，任何一筆捐款，無論金額，都</p>
        <p>能幫助喵喵我推動寵物福利。幫助喵喵我推動寵物福利。</p>
        <p class="pt-8">本專案募集資金將100%用於參選保證金，並且公開專案帳目；</p>
        <p>當選後，退還的保證金將提撥給地方黨部，作為黨務運作之</p>
        <p>用。</p>
        <p class="pt-8">您的支持，會直接幫助喵喵黨能在各地推出更多的候選人，並在</p>
        <p>各地繼續深耕。</p>
      </div>
      <div class="flex flex-col">
        <div class="flex items-center text-white">
          <h4 class="pr-6 text-xl">募款累計</h4>
          <div class="flex flex-col items-end">
            <h2 class="text-5xl">{{ donateTotal }}</h2>
            <h4 class="text-gray">需要保證金 1000 萬</h4>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div v-for="item in donateList" :key="item.id" class="flex flex-col  items-center mr-6">
          <div v-if="item.id !== '4'" class="flex flex-col items-center">
            <h4 class="text-2xl text-white pb-4">{{ item.title }}</h4>
            <div class="h-60 w-52 text-center text-40 bg-white rounded-4xl font-black">
              {{ item.money }}
            </div>
            <h4 class="text-mainYellow pt-4">{{ item.desc }}</h4>
          </div>
          <div v-else class="flex flex-col items-center">
            <h4 class="text-2xl text-white pb-4">{{ item.title }}</h4>
            <input type="text" name="" placeholder="請輸入金額"
            class="h-60 w-52 text-center text-2xl bg-white rounded-4xl font-black">
            <h4 class="text-white pt-2">最高額度新台幣十萬元整</h4>
            <h4 class="text-mainYellow pt-2">{{ item.desc }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .bg-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../assets/image/bg_black.png);
  }
</style>
<script setup>
import { ref } from 'vue'
const donateTotal = ref('3,294,255')
const donateList = ref([
  {
    id: '1',
    title: '輕鬆捐',
    money: '$600',
    desc: '為他撐過風風雨雨'
  },
  {
    id: '2',
    title: '小額捐',
    money: '$1200',
    desc: '為他覆蓋前方泥濘'
  },
  {
    id: '3',
    title: '力挺捐',
    money: '$8800',
    desc: '全力相挺！ 為他全力以赴'
  },
  {
    id: '4',
    title: '自由捐',
    money: '',
    desc: ' 為他披荊斬棘前行'
  },
])

</script>