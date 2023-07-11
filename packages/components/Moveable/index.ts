import { withInstall } from '@notui/utils'
import Moveable from './src/index.vue'

Moveable.name = 'NoMoveable'
export const NoMoveable = withInstall(Moveable)
export default NoMoveable

export * from './src/props'
