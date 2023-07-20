import { withInstall } from '@notui/utils'
import Adsorb from './src/index.vue'

Adsorb.name = 'NoAdsorb'
export const NoAdsorb = withInstall(Adsorb)
export default NoAdsorb

export * from './src/props'
