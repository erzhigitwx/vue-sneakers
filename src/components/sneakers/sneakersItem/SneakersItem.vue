<template>
  <div
      class="flex flex-col gap-4 border border-solid border-[#e0ddde] h-[280px] bg-white rounded-[40px] hover:shadow-xl px-8 py-5 transition">
    <div class="relative">
      <button class="absolute" @click="props.sneaker.isFavorite = !props.sneaker.isFavorite">
        <img src="/public/like-2.svg" v-if="props.sneaker.isFavorite"/>
        <img src="/public/like-1.svg" v-else/>
      </button>
      <div class="flex justify-center">
        <img :src="props.sneaker.imageUrl" :alt="props.sneaker.id" class="w-32 h-28"/>
      </div>
    </div>
    <div>
      <h6 class="font-normal text-[14px]">{{ props.sneaker.title }}</h6>
    </div>
    <div class="flex justify-between items-center mt-auto">
      <span class="flex flex-col gap-1">
        <p class="font-medium text-xs uppercase text-gray-400">ЦЕНА:</p>
        <p class="font-bold text-[18px]">{{ props.sneaker.price }} руб.</p>
      </span>
      <button @click="props.sneaker.isInBasket = !props.sneaker.isInBasket">
        <img src="/public/checked.svg" v-if="props.sneaker.isInBasket"/>
        <img src="/public/plus.svg" v-else/>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sneaker: Object
})
</script>