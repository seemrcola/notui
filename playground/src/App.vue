<script setup lang='ts'>
import { ref } from 'vue'
import { useDrag, useTeleportDrag } from '@notui/hooks'
import Adsorb from '@notui/components/Adsorb/src/index.vue'
import Header from './components/Header.vue'

const drag = ref(null)
const drag2 = ref(null)
const parent = ref(null)
useTeleportDrag(drag)
useDrag(drag2, parent)
</script>

<template>
  <Header w-full bg="gray-100" />
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

    <Adsorb>
      <template #bar>
        jajaj
      </template>
    </Adsorb>

    <div
      ref="drag2"
      bg-blue rounded-full w-10 h-10 absolute
    />
  </div>
</template>
