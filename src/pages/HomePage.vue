<template>
  <div>
    <div class="flex justify-center">
      <div class="hidden lg:flex flex-col gap-6 items-start justify-center w-96">
        <span class="flex flex-col">
          <h1 class="text-[#8BB43C] font-bold text-[38px] leading-9">Stan Smith,</h1>
          <h1 class="font-bold text-[38px] leading-9">Forever!</h1>
        </span>
        <Button>Купить</Button>
      </div>
      <img src="/public/banner.png" alt="banner"/>
    </div>

    <Sneakers
        class="mt-10"
        title="Все кроссовки"
        :sneakers="props.sneakers"
        :placeholder="placeholder"
        :filters="true"
        :is-loading="isLoading"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  sneakers: Array,
  isLoading: Boolean
})

const placeholder = {
  emoji: "/public/emoji-1.png",
  title: "Неизвестная ошибка :(",
  subTitle: "Не удалось загрузить кроссовки"
}

import Sneakers from "../components/sneakers/Sneakers.vue";
import Button from "../components/button/Button.vue";
</script>