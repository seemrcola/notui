// isNaN
export function isNaN(value: any): boolean {
  return Number.isNaN(value)
}

// isNumber - 判断是否是数字
export function isNumber(value: any): boolean {
  return typeof value === 'number' && !isNaN(value)
}

// isString - 判断是否是字符串
export function isString(value: any): boolean {
  return typeof value === 'string'
}

// isNull - 判断是否是 null
export function isNull(value: any): boolean {
  return value === null
}

// isUndefined - 判断是否是 undefined
export function isUndefined(value: any): boolean {
  return value === undefined
}

// isObject - 判断是否是对象
export function isObject(value: any): boolean {
  return typeof value === 'object' && !isNull(value)
}

// isFunction - 判断是否是函数
export function isFunction(value: any): boolean {
  return typeof value === 'function'
}

// isArrray - 判断是否是数组
export function isArray(value: any): boolean {
  return Array.isArray(value)
}
