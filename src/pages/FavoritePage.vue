<template>
  <div>
    <Sneakers :sneakers="props.sneakers.filter(i => i.isFavorite)" title="Мои закладки" :placeholder="placeholder"/>
  </div>
</template>

<script setup>

const props = defineProps({
  sneakers: Array
})

const placeholder = {
  emoji: "/public/emoji-1.png",
  title: "Закладок нет :(",
  subTitle: "Вы ничего не добавляли в закладки"
}
import Sneakers from "../components/sneakers/Sneakers.vue";
</script>