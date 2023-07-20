<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { useTeleportDrag } from '@notui/hooks/useTeleportDrag'
import { adsorbProps } from './props'

const props = defineProps(adsorbProps)

const show = ref(false)
const dragRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
useTeleportDrag(dragRef)

function showContent(ifShow: boolean) {
  if (!ifShow) {
    show.value = false
    return
  }

  show.value = true

  nextTick(() => {
    const rect = dragRef.value!.getBoundingClientRect()
    const { width, height, left, top } = rect
    const x = left + width / 2
    const y = top + height / 2

    contentRef.value!.style.left = `${x - (props.width)}px`
    contentRef.value!.style.top = `${y - (props.height)}px`
  })
}
</script>

<template>
  <div
    v-if="show"
    ref="contentRef"
    :style="{
      height: `${props.height}px`,
      width: `${props.width}px`,
    }"
    shadow="md"
    absolute
  >
    <slot name="content" />
  </div>
  <Teleport to="body">
    <div
      ref="dragRef"
      class="w-10 h-10 rounded-full shadow cursor-pointer border-none"
      bg="teal-600 hover:teal-700" flex justify-center
      items-center absolute right-0 bottom="50%"
      transform="translateY(50%)"
      @dblclick="showContent(!show)"
    >
      <div i-ic:outline-send-time-extension text-xl bg-white />
    </div>
  </Teleport>
</template>
