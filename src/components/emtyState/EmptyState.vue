<template>
  <div class="flex justify-center items-center h-[50vh]">
    <div class="flex flex-col items-center gap-8">
      <img :src="props.emoji" alt="emoji" class="w-16 h-16"/>

      <div class="flex flex-col">
        <h3 class="text-center font-semibold text-[24px]">{{ props.title }}}</h3>
        <p class="text-center font-normal text-[16px]">{{ props.subTitle }}</p>
      </div>

      <Button class="flex items-center justify-center gap-2" @click="router.back()">
        <img src="/public/arrow-next.svg" alt="back" class="rotate-180"/>
        <p>Вернуться назад</p>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../button/Button.vue";
import {router} from "../../config/route.js";

const props = defineProps({
  emoji: String,
  title: String,
  subTitle: String,
})
</script>