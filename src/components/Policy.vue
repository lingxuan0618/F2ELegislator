<template>
  <div id="policy" class="bg-image min-h-screen">
    <div class="pt-60">
      <div class="flex justify-center relative w-full">
        <h1 class="text-64 text-mainBlack">政策議題</h1>
        <h1 class="absolute text-92 font-light tracking-widest" style="top:-65%;color:#FFFFFF80">POLICY ISSUES</h1>
      </div>
      <div class="flex flex-col m-auto" style="max-width: 1080px;">
        <div class="flex justify-between">
          <div v-for="item in policyList" :key="item.id" class="pr-6 relative">
            <div class="dialog-border-bottom rounded-xl flex flex-col p-3 items-center text-40 text-mainBlack"
            @click="current = item.id">
              <h4>{{item.desc1}}</h4>
              <h4>{{item.desc2}}</h4>
            </div>
            <div class="absolute text-white bg-mainBlack rounded-3xl py-1 px-2"
            style="left: 50%;transform: translateX(-60%);top: -5%;">{{item.title}}</div>
          </div>
        </div>
        <div v-for="item in policyList" :key="item.id">
          <div v-if="item.id === current" class="p-12 mt-6 bg-white rounded-xl">
            <div class="flex justify-between">
              <h2 class="text-28">{{item.contentTitle}}</h2>
              <div class="flex items-center text-green text-xl">
                <h3>分享</h3>
                <font-awesome-icon icon="fa-brands fa-facebook" class="p-2" />
                <font-awesome-icon icon="fa-brands fa-instagram" class="p-2" />
              </div>
            </div>
            <div class="flex justify-between">
              <div>
                <div class="pt-8">
                  <h2 class="text-xl text-green">{{item.subTitle1}}</h2>
                  <h3>{{item.subContent1}}</h3>
                </div>
                <div class="pt-8">
                  <h2 class="text-xl text-green">{{item.subTitle2}}</h2>
                  <h3>{{item.subContent2}}</h3>
                </div>
                <div class="pt-8">
                  <h2 class="text-xl text-green">{{item.subTitle3}}</h2>
                  <h3>{{item.subContent3}}</h3>
                </div>
              </div>
              <img :src="item.image" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script setup>
import { ref } from 'vue'
const current = ref(1)
const policyList = ref([
  {
    id: 1,
    title: '喵的保障',
    desc1: '寵物醫療',
    desc2: '保障方案',
    contentTitle: '為毛孩子謀福利！ 推動寵物醫療保障方案',
    image: '/src/assets/image/policy1.png',
    subTitle1: '設立寵物醫療基金',
    subContent1: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用',
    subTitle2: '提供醫療補助',
    subContent2: '每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力',
    subTitle3: '合作動物醫院',
    subContent3: '目前已有和超過 200 家動物醫院進行初步的合作討論',
  },
  {
    id: 2,
    title: '喵的福利',
    desc1: '打造寵物',
    desc2: '休閒天堂',
    contentTitle: '為毛孩子謀福利！ 打造寵物休閒天堂',
    image: '/src/assets/image/policy2.png',
    subTitle1: '打造寵物休閒天堂',
    subContent1: '提撥3000萬新台幣，打造寵物休閒天堂',
    subTitle2: '提供寵物spa設施',
    subContent2: '正在跟飯店等spa設施負責人，溝通中',
    subTitle3: '美容玩樂兼具的天堂',
    subContent3: '為了打造寵物的天堂，已與多位寵物權威商討中',
  },
  {
    id: 3,
    title: '喵的教育', 
    desc1: '推廣寵物',
    desc2: '飼養教育',
    contentTitle: '領養代替購買，領養不棄養',
    image: '/src/assets/image/policy3.png',
    subTitle1: '與動物保護志工，攜手合作',
    subContent1: '與動物保護志工，攜手合作，照顧流浪動物',
    subTitle2: '進入學校，推廣教育',
    subContent2: '在小學推廣飼養教育，領養不棄養',
    subTitle3: '擔任志工，愛護毛小孩',
    subContent3: '舉辦多場志工活動，讓民眾體驗照顧毛小孩',
  },
])

</script>
<style scoped>
  .bg-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(../assets/image/bg_yellow.png);
  }
  .dialog-border-bottom {
    border: 5px solid #333333;
    margin-bottom: 10px;
    position: relative;
  }
  .dialog-border-bottom:before {
    border-color: #333333 transparent transparent; 
    border-style: solid solid solid; 
    border-width: 20px 20px 20px 20px; 
    bottom: -40px;
    /* 必須指定，才能顯示內容 */
    content: "";
    height: 0px;
    /* 必須指定，否則會變梯形 */
    position: absolute;
    left: 70px;
    width: 0px;
  }
  .dialog-border-bottom:after {
    border-color: #FCDD2D transparent transparent; 
    border-style: solid solid solid solid; 
    border-width: 20px; 

    /* 必須指定，才能顯示內容 */
    content: "";
    height: 0px;

    /* 必須指定，否則會變梯形 */
    position: absolute;
    left: 70px;
    bottom: -33px;

    width: 0px;
  }
</style>