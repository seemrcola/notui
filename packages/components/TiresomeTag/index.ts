import { withInstall } from '@notui/utils'
import TTag from './src/index.vue'

TTag.name = 'NoTiresomeTag'
export const NoTiresomeTag = withInstall(TTag)
export default NoTiresomeTag

export * from './src/props'
