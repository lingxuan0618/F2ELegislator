<template>
  <div id="contact" class="min-h-screen">
    <div class="flex flex-col items-center m-auto my-16" style="max-width: 1080px;">
      <div class="flex">
        <div class="flex flex-col justify-end pb-4">
          <div class="relative">
            <h1 class="text-64 text-mainBlack">您的聲音，我們的行動！</h1>
            <h1 class="absolute text-yellow text-92 font-light tracking-wider" style="left:-15%; top:-60%">CONTACT US</h1>
          </div>
          <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到</p>
          <p>您的建議。分享您的想法，一同為我們的未來打造更美好！</p>
        </div>
        <img src="/src/assets/image/contactMeow.png" alt="contactMeow">
      </div>
      <div class="w-full tracking-wider">
        <div class="flex border-4 border-black rounded-2xl p-20">
          <div class="pr-6 w-1/2 flex flex-col justify-between">
            <div class="w-full">
              <h5 class="pb-4">您的姓名</h5>
              <input type="text" class="h-12 pl-2 py-1 border-2 w-full border-black rounded-xl bg-lightYellow"
              placeholder="請輸入您的姓名">
            </div>
            <div class="w-full">
              <h5 class="pb-4">您的 Email</h5>
              <input type="text" class="h-12 pl-2 py-1 border-2 w-full border-black rounded-xl bg-lightYellow"
              placeholder="請輸入您的電子郵件">
            </div>
            <div class="w-full">
              <h5 class="pb-4">您的手機號碼</h5>
              <input type="text" class="h-12 pl-2 py-1 border-2 w-full border-black rounded-xl bg-lightYellow"
              placeholder="09-xxx-xxx">
            </div>
          </div>
          <div class="flex flex-col w-1/2">
            <div class="w-full pb-4">
              <h5 class="pb-4">您的建言</h5>
              <textarea type="text" class="pl-2 py-1 border-2 w-full border-black rounded-xl bg-lightYellow"
              rows="8" style="resize: none;"></textarea>
            </div>
            <button class="h-12 border-2 text-xl border-black rounded-xl bg-mainYellow">送出意見</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>