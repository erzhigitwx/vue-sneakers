<template>
  <div class="flex flex-col gap-6 lg:gap-8">
    <div v-if="props.filters" class="flex flex-col gap-4 lg: lg:flex-row lg:items-center justify-between">
      <h1 class="font-bold text-3xl">{{ props.title }}</h1>
      <div class="flex flex-col sm:flex-row sm:items-center gap-4">
        <select
            class="py-2 px-3 border border-gray-200 focus:border-gray-400 rounded-md focus:outline-none"
            @change="handleFilterChange"
        >
          <option value="name">По названию</option>
          <option value="price">По цене (дешевые)</option>
          <option value="-price">По цене (дорогие)</option>
        </select>
        <div class="relative">
          <input
              type="text"
              class="w-full sm:w-fit border border-gray-200 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-gray-400"
              placeholder="Поиск..."
              @input="e => filters.searchValue = e.target.value"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src="/search.svg"/>
          </div>
        </div>
      </div>
    </div>
    <h1 v-else class="font-bold text-3xl">{{ props.title }}</h1>
    <template v-if="filters.searchValue || filters.sortBy !== 'name'">
      <div v-if="filteredSneakers?.length" class="sneakers-container">
        <div v-for="sneaker of filteredSneakers">
          <sneakers-item :sneaker="sneaker"/>
        </div>
      </div>
      <EmptyState
          v-else
          :title="'Ничего не нашлось'"
          :emoji="props.placeholder.emoji"
          :sub-title="'Не удалось найти подходящие кроссовки'"
      />
    </template>
    <template v-else>
      <div v-if="props.sneakers?.length" class="sneakers-container">
        <div v-for="sneaker of props.sneakers">
          <sneakers-item :sneaker="sneaker"/>
        </div>
      </div>
      <div v-else-if="props.isLoading">
        скелетон
      </div>
      <EmptyState
          v-else
          :title="props.placeholder.title"
          :emoji="props.placeholder.emoji"
          :sub-title="props.placeholder.subTitle"
      />
    </template>
  </div>
</template>

<script setup>
import SneakersItem from "./sneakersItem/SneakersItem.vue";
import EmptyState from "../emtyState/EmptyState.vue";
import {reactive, ref, watch} from "vue";
import {Fetch} from "../../utils/methods.js";

const props = defineProps({
  title: String,
  sneakers: Array,
  placeholder: {
    emoji: String,
    title: String,
    subTitle: String,
  },
  filters: Boolean,
  isLoading: Boolean
})

const filters = reactive({
  sortBy: "name",
  searchValue: ""
})
const filteredSneakers = ref([]);

const handleFilterChange = (e) => {
  filters.sortBy = e.target.value
}

watch(filters, async () => {
  filteredSneakers.value = await Fetch(`https://27604ec439ebad94.mokky.dev/sneakers?sortBy=${filters.sortBy}&${filters.searchValue ? `&title=*${filters.searchValue}*` : ''}`);
});
</script>

<style lang="css" scoped>
.sneakers-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: 280px;
  gap: 20px;
  @media screen and (min-width: 1024px) {
    gap: 40px;
  }
  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
}
</style>