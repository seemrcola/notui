import { withInstall } from '@notui/utils'
import Moveable from './src/index.vue'

export const NoMoveable = Moveable
export default withInstall({ ...NoMoveable, name: 'NoMoveable' })

export * from './src/props'
