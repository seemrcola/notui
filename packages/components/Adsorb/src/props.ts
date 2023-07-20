import type { ExtractPropTypes } from 'vue'

export const adsorbProps = {
  width: {
    type: Number,
    default: 200,
  },
  height: {
    type: Number,
    default: 200,
  },
} as const

export type NoAdsorbProps = ExtractPropTypes<typeof adsorbProps>
