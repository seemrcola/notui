<script setup lang='ts'>
import { onMounted } from 'vue'
import { createNamespace } from '@notui/utils/src/bems'
import { lazyImagesProps } from './props'
import type { ImageDesc } from './props'

const props = defineProps(lazyImagesProps)

// bem name
const bem = createNamespace('lazy-images')
const imgClassName = bem.element('image')

const lazyList: ImageDesc[][] = []
const lazyListHeight: number[] = []
for (let i = 0; i < props.col; i++) {
  lazyList.push([])
  lazyListHeight.push(0)
}

props.images.forEach((image) => {
  image.renderWidth = props.colWidth
  image.renderHeight = props.colWidth * (image.height / image.width)
  const minIndex = lazyListHeight.indexOf(Math.min(...lazyListHeight))
  lazyList[minIndex].push(image)
  lazyListHeight[minIndex] += image.renderHeight
})

const lazyImagesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target as HTMLImageElement
      lazyImage.src = lazyImage.dataset.src!
      lazyImage.classList.remove(imgClassName)
      lazyImagesObserver.unobserve(lazyImage)
    }
  })
})

onMounted(() => {
  const lazyImages = document.querySelectorAll(`.${imgClassName}`)
  lazyImages.forEach((lazyImage) => {
    lazyImagesObserver.observe(lazyImage)
  })
})
</script>

<template>
  <div
    :class="bem.block('wrapper')"
    flex justify-around flex-wrap
  >
    <div
      v-for="(item, idx) of lazyList" :key="`the-${idx}-list`"
      :style="{ width: `${props.colWidth}px` }"
    >
      <div v-for="(imageinfo, index) of item" :key="`the-${index}-image`">
        <img
          :data-src="imageinfo.url"
          :class="imgClassName"
          :style="{
            width: `${imageinfo.renderWidth}px`,
            height: `${imageinfo.renderHeight}px`,
          }"
        >
        <p v-if=" imageinfo.desc">
          {{ imageinfo.desc }}
        </p>
      </div>
    </div>
  </div>
</template>
