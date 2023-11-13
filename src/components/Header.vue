<template>
  <div class="flex items-center justify-between px-8 w-full fixed bg-white" style="z-index:500">
    <div class="flex">
      <img src="/src/assets/image/logo.png" alt="選舉章" class="pr-6">
      <div class="flex items-center my-2 bg-mainBlack rounded-3xl text-white">
        <h3 class="px-2">2024 立委</h3>
        <div class="w-6 h-6 rounded-full bg-mainYellow text-center text-mainBlack font-bold">3</div>
        <h3 class="px-2">號參選人</h3>
      </div>
    </div>
    <div class="flex">
      <a href="#advocate" class="relative">
        <h4 class="mx-4 cursor-pointer">候選人主張</h4>
        <img src="/src/assets/image/message.png" alt="message" class="absolute shake" style="top:-50%;left:-15%">
      </a>
      <a href="#news"><h4 class="mx-4 cursor-pointer">最新活動</h4></a>
      <a href="#policy"><h4 class="mx-4 cursor-pointer">政策議題</h4></a>
      <a href="#support" class="relative">
        <h4 class="mx-4 cursor-pointer">小額捐款</h4>
        <img src="/src/assets/image/money1.png" alt="money1" class="absolute down" style="top:-90%;right:15%">
        <img src="/src/assets/image/money2.png" alt="money2" class="absolute down" style="top:-50%;right:-15%">
      </a>
      <a href="#contact"><h4 class="mx-4 cursor-pointer">民眾服務信箱</h4></a>
    </div>
    <div class="flex text-green text-2xl">
      <font-awesome-icon icon="fa-brands fa-facebook" class="p-2 cursor-pointer" />
      <font-awesome-icon icon="fa-brands fa-instagram" class="p-2 cursor-pointer" />
      <font-awesome-icon icon="fa-solid fa-share-nodes" class="p-2 cursor-pointer" />
    </div>
  </div>
</template>
<style scoped>
  .shake { 
    animation: shakeInfinite 2s linear infinite; 
  }
  .down {
    animation: downInfinite 3s linear infinite;
  }
  @keyframes shakeInfinite {
    0%, 65%{ 
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
    70% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    75% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    80% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    85% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    90% {  
      -webkit-transform:rotate(6deg);
      transform:rotate(6deg);
    }
    95% {  
      -webkit-transform:rotate(-6deg);
      transform:rotate(-6deg);
    }
    100% {  
      -webkit-transform:rotate(0deg);
      transform:rotate(0deg);
    }
  }
  @keyframes downInfinite {
    0%{ 
      transform: translateY(-10px) rotate(0deg)
    }
    100% {  
      transform:translateY(20px) rotate(180deg);
    }
  }
</style>