import type { ExtractPropTypes, PropType } from 'vue'

export interface ImageDesc {
  url: string
  width: number
  height: number
  [key: string]: any
}

export const lazyImagesProps = {
  images: {
    type: Array as PropType<ImageDesc[]>,
    required: true,
  },
  col: {
    type: Number,
    default: 3,
  },
  colWidth: {
    type: Number,
    default: 100,
  },
} as const

export type NLazyImagesProps = ExtractPropTypes<typeof lazyImagesProps>
