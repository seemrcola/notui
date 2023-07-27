import type { ExtractPropTypes } from 'vue'

export const iconProps = {
  name: String,
}

export type NoIconProps = ExtractPropTypes<typeof iconProps>
