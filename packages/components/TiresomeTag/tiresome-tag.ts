import { withInstall } from '@notui/utils'
import TTag from './src/index.vue'

export const NoTiresomeTag = TTag
export default withInstall({ ...NoTiresomeTag, name: 'NoTiresomeTag' })

export * from './src/props'
