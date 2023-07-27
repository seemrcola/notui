<script setup lang='ts' name="NoIcon">
import { onMounted, ref } from 'vue'
import { createNamespace } from '@notui/utils'
import { iconProps } from './props'

const props = defineProps(iconProps)
const bem = createNamespace('icon')
const icon = ref<HTMLElement | null>(null)

onMounted(() => {
  icon.value?.classList.add(bem.block(''))
})
</script>

<template>
  <div ref="icon" :class="props.name" />
</template>
