import type { ExtractPropTypes } from 'vue'

export const iconProps = {
  name: String,
} as const

export type NoIconProps = ExtractPropTypes<typeof iconProps>
