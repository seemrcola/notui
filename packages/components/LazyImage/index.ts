import { withInstall } from '@notui/utils'
import LazyImage from './src/index.vue'

export const NoLazyImage = LazyImage
export default withInstall({ ...NoLazyImage, name: 'NoLazyImage' })

export * from './src/props'
