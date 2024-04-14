<template>
  <div>
    <Sneakers :sneakers="props.sneakers.filter(i => i.isBought)" title="Мои покупки" :placeholder="placeholder"/>
  </div>
</template>

<script setup>
const props = defineProps({
  sneakers: Array
})

const placeholder = {
  emoji: "/emoji-2.png",
  title: "У вас нет заказов",
  subTitle: "Вы нищеброд? Оформите хотя бы один заказ."
}
import Sneakers from "../components/sneakers/Sneakers.vue";
</script>