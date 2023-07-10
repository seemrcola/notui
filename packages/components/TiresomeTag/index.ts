import { withInstall } from '@notui/utils'
import TTag from './src/index.vue'

export const NoTiresomeTag = withInstall({ ...TTag, name: 'NoTiresomeTag' })

export * from './src/props'
