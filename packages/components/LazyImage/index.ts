import { withInstall } from '@notui/utils'
import LazyImage from './src/index.vue'

export const NoLazyImage = withInstall({ ...LazyImage, name: 'NoLazyImage' })

export * from './src/props'
