<template>
  <div id="news" class="min-h-screen pt-20 m-auto" style="max-width: 1080px;">
    <div class="relative flex justify-center">
      <h1 class="text-64 text-mainBlack">最新活動</h1>
      <h1 class="absolute text-yellow text-92 font-light tracking-wider" style="top:-65%">LATEST EVENTS</h1>
    </div>
    <div v-for="item in newsList" :key="item.id">
      <div v-if="current === item.id" class="flex" >
        <div>
        <img :src="item.image" alt="item.date">
        </div>
        <div>
          <div class="flex flex-col items-center">
            <div></div>
            <div class="border-l-12 border-mainYellow pl-4">
              <h6 class="text-sm text-gray">{{ item.date }}</h6>
              <h4>{{ item.title }}</h4>
            </div>
          </div>
          <div class="bg-green border-b-4 border-mainYellow p-8">
            <div>
              <h5 class="text-white">{{ item.content }}</h5>
            </div>
            <div class="flex justify-between pt-12">
              <div class="flex items-center justify-center rounded-3xl px-6 cursor-pointer"
              style="background: #D9D9D999;">
                活動詳情
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="p-2 text-2xl"/>
              </div>
              <div class="flex text-white">
                <div class="flex items-center justify-center h-12 w-12 rounded-full border-2 cursor-pointer"
                @click="changeCurrent('left')">
                  <font-awesome-icon icon="fa-solid fa-arrow-left" class="p-2 text-2xl"/>
                </div>
                <div class="flex items-center justify-center h-12 w-12 rounded-full border-2 ml-4 cursor-pointer"
                @click="changeCurrent('right')">
                  <font-awesome-icon icon="fa-solid fa-arrow-right" class="p-2 text-2xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <marquee class="py-2 text-xl tracking-wider border-y-2" style="background: #D9D9D94D;">
        參與台北寵物論壇，爭取貓咪友善環境 | 收容所模特兒大比拼！ | 掃街模式開啟！帶著你的貓耳，來和我一起走！ | 參與台北寵物論壇，爭取貓咪友善環境
        </marquee>
    </div>
  </div>
</template>
<style scoped>
</style>
<script setup>
import { ref } from 'vue'
const current = ref(1)
const changeCurrent = (value) => {
  const minValue = 1;
  const maxValue = 3;
  if (value === 'left') {
    current.value = current.value > minValue ? current.value - 1 : maxValue;
  } else {
    current.value = current.value < maxValue ? current.value + 1 : minValue;
  }
}
const newsList = ref([
  {
    id: 1,
    date: '2023/12/20',
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    image: '/src/assets/image/news1.png',
  },
  {
    id: 2,
    date: '2023/12/24',
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    image: '/src/assets/image/news2.png',
  },
  {
    id: 3,
    date: '2023/12/26',
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    image: '/src/assets/image/news3.png',
  },
])

</script>