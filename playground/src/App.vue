<script setup lang='ts'>
import { NoIcon, NoMoveable, NoTiresomeTag } from '@notui/components/dist/es/notui.mjs'
import Header from './components/Header.vue'
</script>

<template>
  <Header w-full bg="gray-100" />
  <div w-full h="[calc(100vh-60px)]" flex-center>
    <NoIcon name="i-material-symbols:bookmark-remove-outline" />
    <NoMoveable text-center>
      test
    </NoMoveable>
    <NoTiresomeTag />
  </div>
</template>
