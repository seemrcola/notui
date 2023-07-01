<script setup lang='ts'>
import { Repl as REPL } from '@vue/repl'

// @ts-expect-error
import CodeMirror from '@vue/repl/codemirror-editor'
import '@vue/repl/style.css'
import Header from './components/Header.vue'
</script>

<template>
  <Header bg="gray-100" />
  <div w-full h="[calc(100vh-60px)]" flex-center>
    <REPL w-full :editor="CodeMirror" />
  </div>
</template>
