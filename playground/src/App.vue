<script setup lang='ts'>
import { NoIcon, NoMoveable, NoTiresomeTag } from '@notui/components/dist/components.mjs'
import '@notui/components/dist/style.css'
import Header from './components/Header.vue'
</script>

<template>
  <Header w-full bg="gray-100" />
  <div w-full h="[calc(100vh-60px)]" flex-center>
    <NoIcon name="i-material-symbols:bookmark-remove-outline" />
    <NoMoveable text-center>
      1000
    </NoMoveable>
    <NoTiresomeTag />
  </div>
</template>
