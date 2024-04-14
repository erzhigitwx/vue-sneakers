<template>
  <header class="p-5 lg:p-8 flex flex-col gap-6 items-center md:flex-row md:justify-between border-b-2">
    <router-link to="/" class="flex gap-4 items-center">
      <img src="/public/logo.png" alt="logo" class="w-10 h-10"/>
      <div class="flex flex-col">
        <h2 class="font-bold text-xl uppercase">Vue Sneakers</h2>
        <p class="text-gray-500">Магазин лучших кроссовок</p>
      </div>
    </router-link>
    <nav class="flex gap-12 sm:gap-8 items-center select-none whitespace-nowrap overflow-x-auto scroll">
      <div class="flex gap-2 items-center cursor-pointer" @click="props.changeIsDrawer(!props.isDrawer)">
        <img src="/public/cart.svg" alt="basket"/>
        <p class="font-semibold text-gray-500 hover:text-gray-700">{{ props.count }} руб.</p>
      </div>
      <router-link to="/favorite" class="flex gap-2 items-center">
        <img src="/public/heart.svg" alt="favorite"/>
        <p class="text-gray-500 hover:text-gray-700">Закладки</p>
      </router-link>
      <router-link to="/profile" class="flex gap-2 items-center">
        <img src="/public/profile.svg" alt="profile"/>
        <p class="text-gray-500 hover:text-gray-700">Профиль</p>
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  count: Number,
  sneakers: Array,
  isDrawer: Boolean,
  changeIsDrawer: Function
});
</script>