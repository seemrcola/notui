import type { Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T extends { name: string } >(main: T) {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main])
      app.component(comp.name, comp)
  }
  return main as SFCWithInstall<T>
}
