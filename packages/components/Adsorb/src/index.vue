<script setup lang="ts">
import { ref } from 'vue'
import { useTeleportDrag } from '@notui/hooks/useTeleportDrag'

const show = ref(false)
const dragRef = ref<HTMLElement | null>(null)
useTeleportDrag(dragRef)
</script>

<template>
  <div
    v-if="show"
    class="bg-white text-gray-800 rounded-lg shadow w-max h-min"
    p="x-2 y-2"
    m="y-auto r-2"
    transition="opacity duration-300"
  />
  <Teleport to="body">
    <div
      ref="dragRef"
      class="w-10 h-10 rounded-full shadow cursor-pointer border-none"
      bg="teal-600 hover:teal-700" flex justify-center
      items-center absolute right-0 bottom="50%"
      transform="translateY(50%)"
      @click="show = !show"
    >
      <div i-ic:outline-send-time-extension text-xl bg-white />
    </div>
  </Teleport>
</template>
