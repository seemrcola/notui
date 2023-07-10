import { withInstall } from '@notui/utils'
import Icon from './src/index.vue'

export const NoIcon = Icon
export default withInstall({ ...NoIcon, name: 'NoIcon' })

export * from './src/props'
