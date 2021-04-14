# PureComponet

1. 常用来提高性能 内置实现了 shouldComponentUpdate
2. 但是内部进行的是浅层的比较 仅当 state 和 props 简单时才使用这个方法
3. 此外 其还会跳过子组件的 prop 更新

# memo

1. 和 pureComponent 相似 但是 memo 只用于函数组件
2. 适用情况 函数组件在给定相同 props 的情况下渲染相同的结果
3. 只比较 props

# React.children

1. React.children.map(children,function(thisArg)) forEach
2. count 返回 children 中组件的总数量
3. only 验证参数是否只有一个子节点 如果是则会返回这个子节点 否则则抛出错误
4. toArray 将 children 数据结构扁平化为一个数组

# suspence 与 lazy

1. 通过 lazy 我们可以指定一个组件异步加载
2. 异步加载的组件需要外层显示使用 react.suepence 进行包装
3. suspence 存在一个 fallback 的 prop，指向的是一个组件对象
4. 意为在 lazy 指定的组件尚未加载完成时 显示 fallback 指定的组件

# 组件的生命周期

1. 挂载
    - constructor
    - static getDerivedStateFromProps
    - render
    - componentDidMount
2. 更新
    - static getDerivedStateFromProps
    - shouldComponentUpdate
    - render
    - getSnapshotBeforeUpdate
    - componetDidUpdate
3. 卸载
    - componetWillUnmount
4. 错误处理
    - static getDerivedStateFromError
    - componentDidCatch

## render 的返回类型

1. react 元素
    - 通常为 html 元素或者 react 组件 均为 react 元素
2. 数组或者 fragments
    - 使得 render 方法可以返回多个元素 <fragment />
3. portals
    - 相当于插槽 渲染子节点到不同的 dom 子树之中
4. 字符串或者数值
    - 渲染为文本信息
5. 布尔值或者 null - 什么都不渲染 render 应是个`纯函数` 在不修改 state 的情况下返回相同的结果

# constuctor

1. 通常干两件事
    - 初始化 state this.state={xx}
    - 订阅事件绑定
2. 不要将 props 赋值给 state

#　 componetDidMount

1. 组件挂载之后调用
2. 适合
    - 网络请求数据
    - 添加订阅

# componentDidUpdate

1. 组件更新之后调用
2. 在此处调用 setState 必须`包裹在一个条件语句之中` 否则会死循环

# shouleComponentUpdate

1. 当 props 或者 state 发生变化时调用 默认返回 true
2. 如果是首次渲染或者是 forceUpdate 则不会调用

# static getDerivedStateFromProps

1. 返回一个对象来更新 state 返回 null 则不更新
2. 仅仅适用于 state 的值在任何时候都取决于 props

# getSnapshotBeforeUpdate

1. 在组件更新之前捕捉一些信息
2. 所有的返回值都将作为参数传递给 componentDidUpdate

# static getDerivedStateFromError

1. 组件抛出错误时调用
2. 抛出的错误作为参数 并返回一个新的值来更新 state
3. 不允许出现任何副作用

# componentDidCatch

1. 接受两个参数 一个是 error 一个是 info（错误的栈信息
2. 可以包含副作用

# forceUpdate

1. 强制进行 render 方法 跳过 shouldComponetUpdate
2. 子组件的不会跳过
