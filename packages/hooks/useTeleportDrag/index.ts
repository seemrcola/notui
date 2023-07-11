/*
* 注意：将需要drag的元素telleport到body下, 传入dom即可实现拖拽
*/
import type { Ref } from 'vue'
import { ref, watch } from 'vue'

export interface UseDragResult {
  mousedownHanlder: (event: MouseEvent) => void
  dragFlag: Ref<boolean>
}

export function useTeleportDrag(domRef: Ref<any>): UseDragResult {
  const dragFlag = ref(false)
  const refMounted = ref(false)
  let skewing: { x: number; y: number }

  watch(
    () => domRef.value,
    (val) => {
      if (val && !refMounted.value) {
        refMounted.value = true
        val.addEventListener('mousedown', mousedownHanlder)
      }
    },
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
    if (!dragFlag.value)
      return
    const { clientX, clientY } = e
    const { x, y } = skewing
    const offsetX = clientX - x
    const offsetY = clientY - y

    requestAnimationFrame(
      () => {
        domRef.value!.style.left = `${offsetX}px`
        domRef.value!.style.top = `${offsetY}px`
      },
    )
  }
  function mouseupHanlder() {
    dragFlag.value = false
    document.removeEventListener('mousemove', mousemoveHanlder)
    document.removeEventListener('mouseup', mouseupHanlder)
  }

  return {
    mousedownHanlder,
    dragFlag,
  }
}
