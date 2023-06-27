// 根据以下规则完成bem规范的命名

// block 代码块
// element 元素
// modifer 修饰符
// state 状态

interface BEMS {
  block: (block: string) => string
  element: (element: string) => string
  modifer: (modifer: string) => string
  state: (state: string) => string
}

interface BEMSOptions {
  block?: string
  element?: string
  modifer?: string
  state?: string
}

/**
 * @param prefixName
 * @return bems
 */
function createBEM(prefixName: string): BEMS {
  const block = (block: string) => _bems(prefixName, { block })
  const element = (element: string) => _bems(prefixName, { element })
  const modifer = (modifer: string) => _bems(prefixName, { modifer })
  const state = (state: string) => _bems(prefixName, { state })
  return {
    block, element, modifer, state,
  }
}

/**
 * @param prefixName
 * @param options
 * @return bems
 * @example
 * _bems('no-button', { block: 'wrapper' }) // no-button__wrapper
 * _bems('no-button', { element: 'span' }) // no-button__span
 * _bems('no-button', { modifer: 'primary' }) // no-button--primary
 * _bems('no-button', { state: 'disabled' }) // no-button--disabled
 * _bems('no-button', { block: 'wrapper', element: 'span', modifer: 'primary', state: 'disabled' }) // no-button__wrapper__span--primary--disabled
*/
function _bems(prefixName: string, options: BEMSOptions): string {
  const { block, element, modifer, state } = options
  if (block)
    prefixName += `-${block}`
  if (element)
    prefixName += `__${element}`
  if (modifer)
    prefixName += `--${modifer}`
  if (state)
    prefixName += `--${state}`
  return prefixName
}

/**
 * @param name
 * @return no-name
 */
export function createNamespace(name: string): BEMS {
  return createBEM(`no-${name}`)
}
