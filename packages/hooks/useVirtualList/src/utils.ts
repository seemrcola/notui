// 找到第一个大于等于 vitrualOffset 的值的元素
import type { Desc } from './types'

export function bs<T>(list: Desc<T>[], vitrualOffset: number) {
  const len = list.length
  let left = -1
  let right = len
  while (left < right - 1) {
    const mid = (left + right) >> 1
    const offset = list[mid].bottom
    if (offset > vitrualOffset)
      right = mid
    else if (offset < vitrualOffset)
      left = mid
    else
      return mid
  }
  return left + 1
}
