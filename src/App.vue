<template>
  <div class="p-14 bg-blue-300 min-h-[100vh]">
    <Drawer v-show="isDrawer" :change-is-drawer="changeIsDrawer" :sneakers="sneakers.filter(sneak => sneak.isInBasket)" :count="count"/>
    <div class="bg-white h-[100%] rounded-3xl" >
      <Header :sneakers="sneakers" :is-drawer="isDrawer" :change-is-drawer="changeIsDrawer" :count="count"/>
      <div class="py-[45px] px-[60px] min-h-[70vh]">
        <router-view :sneakers="sneakers"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/header/Header.vue";

import {computed, onMounted, ref} from "vue";
import Drawer from "./components/drawer/Drawer.vue";

const sneakers = ref([]);
const isDrawer = ref(false);

onMounted(async () => {
  const res = await fetch("https://27604ec439ebad94.mokky.dev/sneakers");
  const data = await res.json();
  sneakers.value = data;
});

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
</script>
