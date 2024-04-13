<template>
  <button class="px-10 py-3 bg-[#a5d364] hover:brightness-75 transition rounded-3xl font-bold text-[16px] uppercase text-center text-white">
    <slot/>
  </button>
</template>

<script setup>
defineProps({
  slot: HTMLSlotElement
})
</script>