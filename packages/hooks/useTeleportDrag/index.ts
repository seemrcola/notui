/*
* 注意：将需要drag的元素telleport到body下, 传入dom即可实现拖拽
*/
import type { Ref } from 'vue'
import { onScopeDispose, ref, watch } from 'vue'

export interface UseTeleportDragResult {
  dragFlag: Ref<boolean>
}

export function useTeleportDrag(domRef: Ref<any>): UseTeleportDragResult {
  const dragFlag = ref(false)
  let skewing = { x: 0, y: 0 }

  const unwatch = watch(
    () => domRef.value,
    (val) => {
      if (val) {
        val.addEventListener('mousedown', mousedownHanlder)
        unwatch()
      }
    },
    { immediate: true },
  )

  function mousedownHanlder(e: MouseEvent) {
    dragFlag.value = true
    const { clientX, clientY } = e
    const rect = domRef.value!.getBoundingClientRect()
    const { left: preLeft, top: preTop } = rect
    skewing = { x: clientX - preLeft, y: clientY - preTop }
    document.addEventListener('mousemove', mousemoveHanlder)
    document.addEventListener('mouseup', mouseupHanlder)
  }
  function mousemoveHanlder(e: MouseEvent) {
    e.stopPropagation()
    e.preventDefault()
    if (!dragFlag.value)
      return
    const { clientX, clientY } = e
    const { x, y } = skewing
    const offsetX = clientX - x
    const offsetY = clientY - y

    requestAnimationFrame(
      () => {
        domRef.value.style.left = `${offsetX}px`
        domRef.value.style.top = `${offsetY}px`
      },
    )
  }
  function mouseupHanlder() {
    dragFlag.value = false
    document.removeEventListener('mousemove', mousemoveHanlder)
    document.removeEventListener('mouseup', mouseupHanlder)
  }

  onScopeDispose(() => unwatch())

  return {
    dragFlag,
  }
}
