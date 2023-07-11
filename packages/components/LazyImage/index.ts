import { withInstall } from '@notui/utils'
import LazyImage from './src/index.vue'

LazyImage.name = 'NoLazyImage'
export const NoLazyImage = withInstall(LazyImage)
export default NoLazyImage

export * from './src/props'
