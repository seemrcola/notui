## monorepo study  

一个monorepo的学习项目    顺便学习写写组件和hooks


组件放在/packages/components下  
- adsorb 一个吸附在浏览器右侧的弹框，双击可收起和展开
- moveable 一个可拖拽以及拉伸的基础组件
- lazy-image 一个图片瀑布流基础组件
- tiresome 一个根据对角线将屏幕划成四个部分，根据鼠标所在部分跑到对应 top ｜ left ｜ right ｜ bottom 的组件

hooks放在/packages/hooks下
- useDrag 一个拖拽的hook
- useDragTeleport 上面的简化版 只处理针对body的拖拽
- useProgressImage 渐进式图片
- useVirtualList 虚拟列表 支持动态高度
- useVirtualBeta 虚拟列表 不支持动态高度 是一个试验性的写法，不使用原生滚动条 来处理快速拖动下的白屏问题

