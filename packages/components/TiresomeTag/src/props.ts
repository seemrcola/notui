import type { ExtractPropTypes } from 'vue'

export const tTagProps = {
  githubLink: String,
} as const

export type NoTTagProps = ExtractPropTypes<typeof tTagProps>
