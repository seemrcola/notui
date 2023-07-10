import { withInstall } from '@notui/utils'
import Moveable from './src/index.vue'

export const NoMoveable = withInstall({ ...Moveable, name: 'NoMoveable' })

export * from './src/props'
