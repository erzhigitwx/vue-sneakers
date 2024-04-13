<template>
  <div class="flex flex-col gap-8">
    <h1 class="font-bold text-3xl">{{ props.title }}</h1>
    <div v-if="props.sneakers?.length" class="sneakers-container">
      <div v-for="sneaker of props.sneakers">
        <sneakers-item :sneaker="sneaker"/>
      </div>
    </div>
    <EmptyState v-else :title="props.placeholder.title" :emoji="props.placeholder.emoji" :sub-title="props.placeholder.subTitle"/>
  </div>
</template>

<script setup>
import SneakersItem from "./sneakersItem/SneakersItem.vue";
import EmptyState from "../emtyState/EmptyState.vue";


const props = defineProps({
  title: String,
  sneakers: Array,
  placeholder: {
    emoji: String,
    title: String,
    subTitle: String,
  }
})

</script>

<style lang="scss" scoped>
.sneakers-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: 280px;
  gap: 40px;
}
</style>