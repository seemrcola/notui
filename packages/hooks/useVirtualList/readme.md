## useVirtualList

### args interface

```ts
interface Options {
  itemHeight: number // 单个元素高度
  containerHeight: number // 容器高度
  dynamic?: boolean // 是否动态高度
}
```

### usage
如果是固定高度的情况  
如下
```vue
<script setup lang='ts'>
import { useVirtualList } from './useVirtualList'

// ==== 10000 items ===============
const length = 10000
const list: any[] = []
for (let i = 0; i < length; i++)
  list.push({ text: i })
// ==============================

// ====== useVirtualList ==============
const virtualList = useVirtualList(
  list,
  '.container-simple',
  {
    itemHeight: 40,
    containerHeight: 600,
  },
)
const { init, renderList, itemStyle } = virtualList
init()
// ====================================
</script>

<template>
  <div>
    <div
      class="container-simple"
      w="350px" h="600px"
      b="1px solid gray"
      overflow-auto
    >
      <div
        v-for="(item) of renderList" :key="item.text"
        bg="white"
        h="40px"
        :style="itemStyle"
      >
        <div h-full flex-center b="1px dashed gray">
          #Title {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>
```

如果使用dynamic模式，需要在元素中传入一个`data-index`属性  
如下
```vue
<script setup lang='ts'>
import { useVirtualList } from './useVirtualList'

function generateRandomText() {
  let text = ''
  const length = Math.floor(Math.random() * 400) + 1 // 随机生成长度为1到10的整数
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length)
    text += possibleChars.charAt(randomIndex)
  }

  return text
}

// ================ 10000 items ===============
const length = 1000
const list: any[] = []
for (let i = 0; i < length; i++)
  list.push({ text: i, content: generateRandomText() })
// ===========================================

// ============= useVirtualList ===============
const { init, dynamicList, itemStyle } = useVirtualList(
  list,
  '.container-list-dynamic',
  {
    itemHeight: 80,
    containerHeight: 600,
    dynamic: true,
  },
)
init()
// =========================================
</script>

<template>
  <div>
    <div
      class="container-list-dynamic"
      w="350px" h="600px" max-h="600px"
      b="1px solid gray"
    >
      <div
        v-for="(item) of dynamicList" :key="item.data.index"
        bg="white"
        :data-index="item.index" dynamic模式需要传入data-index
        :style="itemStyle"
      >
        <div h-full flex-center b="1px dashed gray">
          #Title {{ item.data.text }}
        </div>
        <div
          b="1px dashed gray" p-4
          :style="{ 'overflow-wrap': 'break-word' }"
        >
          {{ item.data.content }}
        </div>
      </div>
    </div>
  </div>
</template>
```
