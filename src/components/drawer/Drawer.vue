<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 z-30 flex justify-between">
    <div class="w-0 sm:w-[66.6%] h-full backdrop-brightness-50" @click="props.changeIsDrawer(false)"/>
    <div class="w-full sm:w-[33.3%] sm:min-w-[380px] p-5 sm:p-8 bg-white h-full flex flex-col"
         :class="{ 'justify-start': !props.sneakers.length || isConfirmed, 'justify-between': props.sneakers.length }">
      <div class="flex items-center justify-between">
        <h2 class="font-bold text-[24px]">Корзина</h2>
        <button @click="props.changeIsDrawer(false)">
          <img src="/public/close.svg" alt="close" class="min-w-8 min-h-8"/>
        </button>
      </div>
      <div v-if="isConfirmed">
        <EmptyState
            :title="'Заказ оформлен!'"
            :sub-title="'Ваш заказ #18 скоро будет передан курьерской доставке'"
            :emoji="'/order-success-icon.png'" class="mt-[50%]"
            @click="props.changeIsDrawer(false)"/>
      </div>
      <template v-else>
        <template v-if="props.sneakers.length">
          <div class="mt-8 flex flex-col gap-5 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto scroll">
            <div v-for="sneaker of props.sneakers">
              <SneakersItemRow :sneaker="sneaker"/>
            </div>
          </div>
          <div class="mt-auto w-full">
            <div class="flex flex-col gap-5">
              <div class="flex items-end gap-2">
                <p class="font-normal text-[16px] whitespace-nowrap">Итого</p>
                <span class="w-full border-b-2 border-dotted"/>
                <p class="font-semibold text-[16px] whitespace-nowrap">{{ props.count }} руб.</p>
              </div>
              <div class="flex items-end gap-2">
                <p class="font-normal text-[16px] whitespace-nowrap">Налог 5%</p>
                <span class="w-full border-b-2 border-dotted"/>
                <p class="font-semibold text-[16px] whitespace-nowrap">{{ tax }} руб.</p>
              </div>
            </div>
            <Button class="w-full flex items-center justify-center gap-4 py-5 mt-6"
                    @click="handleConfirm(props.sneakers)">
              <p>Оформить заказ</p>
              <img src="/public/arrow-next.svg" alt="arrow"/>
            </Button>
          </div>
        </template>
        <div v-else>
          <EmptyState
              :title="'Корзина пустая'"
              :sub-title="'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'"
              :emoji="'/package-icon.png'" class="mt-[50%]"
              @click="props.changeIsDrawer(false)"/>
        </div>
      </template>
      -
    </div>
  </div>
</template>

<script setup>
import {computed, defineProps, onMounted, onUnmounted, ref} from "vue";
import SneakersItemRow from "../sneakersItemRow/SneakersItemRow.vue";
import Button from "../button/Button.vue";
import EmptyState from "../emtyState/EmptyState.vue";

const props = defineProps({
  count: Number,
  sneakers: Array,
  changeIsDrawer: Function
})

const isConfirmed = ref(false);
const tax = computed(() => {
  return Math.floor((props.count * 5) / 100)
})
const handleConfirm = (sneakers) => {
  sneakers.forEach((sneaker) => {
    sneaker.isInBasket = false;
    sneaker.isBought = true;
  });
  isConfirmed.value = true;
  setTimeout(() => {
    isConfirmed.value = false;
  }, 3000);
};
</script>

<style>
.drawer-open {
  overflow: auto;
}
</style>