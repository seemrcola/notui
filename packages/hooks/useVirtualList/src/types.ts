export interface Desc<T> {
  /* item 高度 */
  height: number
  /* item顶部距离包裹容器的高度 */
  top: number
  /* item底部距离包裹容器的高度 */
  bottom: number
  /* item 的 序号 */
  index: number
  /* item 原始内容 */
  data: T
}

/* 用户传的配置 */
export interface Options {
  /* 单个元素高度 */
  itemHeight: number
  /* 容器高度 */
  containerHeight: number
  /* 是否动态高度 */
  dynamic?: boolean
}
