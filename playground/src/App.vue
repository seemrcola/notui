<script setup lang='ts'>
import { ref } from 'vue'
import { useDrag, useTeleportDrag } from '@notui/hooks'
import { NoAdsorb, NoLazyImage, NoMoveable, NoTiresomeTag } from '@notui/components'
import Header from './components/Header.vue'

import data from './assets/img.json'

console.log(data)

const drag = ref(null)
const drag2 = ref(null)
const parent = ref(null)
useTeleportDrag(drag)
useDrag(drag2, parent)
</script>

<template>
  <Header w-full bg="gray-100" />
  <ElButton>000</ElButton>
  <div
    ref="parent"
    w-full h="[calc(100vh-60px)]" flex-center relative
  >
    <NoMoveable text-center>
      test
    </NoMoveable>

    <NoTiresomeTag />

    <Teleport to="body">
      <div
        ref="drag"
        bg-red rounded-full w-10 h-10 absolute
      />
    </Teleport>

    <NoAdsorb />

    <div
      ref="drag2"
      bg-blue rounded-full w-10 h-10 absolute
    />
  </div>

  <NoLazyImage :images="data" :col="6" :col-width="140" />
</template>
