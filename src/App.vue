<template>
  <div class="p-0 sm:p-4 md:p-14 bg-blue-300 min-h-[100vh]">
    <Drawer
        v-show="isDrawer"
        :change-is-drawer="changeIsDrawer"
        :sneakers="sneakers.filter(sneak => sneak.isInBasket)"
        :count="count"
    />
    <div class="bg-white h-[100%] sm:rounded-3xl">
      <Header
          :sneakers="sneakers"
          :is-drawer="isDrawer"
          :change-is-drawer="changeIsDrawer"
          :count="count"
      />
      <div class="py-2.5 px-3 sm:py-5 sm:px-8 lg:py-11 lg:px-16 min-h-[100vh] sm:min-h-[70vh]">
        <router-view :sneakers="sneakers" :is-sneakers-loading="isSneakersLoading"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/header/Header.vue";

import {computed, onMounted, ref, watch} from "vue";
import Drawer from "./components/drawer/Drawer.vue";
import {Fetch} from "./utils/methods.js";

const sneakers = ref([]);
const isSneakersLoading = ref(false);
const isDrawer = ref(false);

const count = computed(() => {
  return sneakers.value.reduce((total, sneaker) => {
    if (sneaker.isInBasket) {
      total += sneaker.price;
    }
    return total;
  }, 0);
});

const changeIsDrawer = (newValue) => {
  isDrawer.value = newValue
}

onMounted(async () => {
  isSneakersLoading.value = true
  sneakers.value = await Fetch("https://27604ec439ebad94.mokky.dev/sneakers");
  isSneakersLoading.value = false
});

watch(isDrawer, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
</script>
