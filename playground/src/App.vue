<script setup lang='ts'>
import NoMoveable from '@notui/components/Moveable'
import Tiresome from '@notui/components/TiresomeTag'
import Icon from '@notui/components/Icon'
import Header from './components/Header.vue'
</script>

<template>
  <Header bg="gray-100" />
  <div w-full h="[calc(100vh-60px)]" flex-center>
    <Icon name="i-material-symbols:bookmark-remove-outline" />
    <NoMoveable text-center>
      1000
    </NoMoveable>
    <Tiresome />
  </div>
</template>
