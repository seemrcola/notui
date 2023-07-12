import type { Ref } from 'vue'
import { ref, watch } from 'vue'

export interface UseDragResult {
  mousedownHanlder: (event: MouseEvent) => void
  dragFlag: Ref<boolean>
}

export function useDrag(domRef: Ref<any>, parentRef: Ref<any>): UseDragResult {
  const dragFlag = ref(false)
  const dragStart = { x: 0, y: 0 }

  const unwatch = watch(
    () => domRef.value,
    (val) => {
      if (val) {
        val.addEventListener('mousedown', mousedownHanlder)
        const { left, top } = domRef.value.getBoundingClientRect()
        const { left: parentLeft, top: parentTop } = parentRef.value.getBoundingClientRect()
        domRef.value.style.left = `${left - parentLeft}px`
        domRef.value.style.top = `${top - parentTop}px`

        unwatch()
      }
    },
  )

  function mousedownHanlder(e: MouseEvent) {
    dragFlag.value = true
    const { clientX, clientY } = e
    dragStart.x = clientX
    dragStart.y = clientY
    document.addEventListener('mousemove', mousemoveHanlder)
    document.addEventListener('mouseup', mouseupHanlder)
  }

  function mousemoveHanlder(e: MouseEvent) {
    if (!dragFlag.value)
      return
    const { clientX, clientY } = e
    const { x, y } = dragStart
    const deltaX = clientX - x
    const deltaY = clientY - y
    dragStart.x = clientX
    dragStart.y = clientY

    requestAnimationFrame(
      () => {
        const currentX = Number.parseInt(domRef.value.style.left) || 0
        const currentY = Number.parseInt(domRef.value.style.top) || 0
        domRef.value!.style.left = `${currentX + deltaX}px`
        domRef.value!.style.top = `${currentY + deltaY}px`
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
