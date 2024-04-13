<template>
  <div class="px-5 py-6 flex items-center justify-between border border-solid border-[#e0ddde] rounded-[20px]">
    <div class="flex items-center gap-3">
      <img :src="props.sneaker.imageUrl" alt="preview" class="h-16 w-16"/>
      <span class="flex flex-col gap-1">
        <p class="font-medium text-xs uppercase text-gray-400">{{ props.sneaker.title }}</p>
        <p class="font-bold text-[18px]">{{ props.sneaker.price }} руб.</p>
    </span>
    </div>
    <button @click="props.sneaker.isInBasket = false" class="mt-auto">
      <img src="/public/close.svg" alt="close" class="min-w-8 min-h-8"/>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  sneaker: Object
})
</script>