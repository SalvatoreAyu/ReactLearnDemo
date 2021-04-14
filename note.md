1. React 只会更新他需要更新的部分
2. 定义组件的两种方式

-   函数式

```js
function Hello(props) {
    return <h1>fuck title</h1>
}
```

-   es6 类

```js
class Hello extends React.component {
    render() {
        return <h1>fuck title</h1>
    }
}
```

3. pros 的只读性

-   无论用哪种方式声明一个组件，都 `绝不能修改自己的props`
-   这样的函数我们也称为纯函数
-   所有 react 组件都必须像纯函数一样保护他们的 props 不被更改

# props 与 state

1. props 就像向下的瀑布流
2. state 的存在就像是再任意一点上为它添加水滴，它也只能是向下的
3. state 是`组件私有的，完全受控与当前组件`
4. 每次组件更新时 render 方法都会被调用

## 正确使用 state

1. 对于 state 的修改，不要直接修改，而是使用 setState
2. 对于异步更新，使用函数更新 state

# 事件处理函数的 this 问题

1. 在构造函数中直接声明 bind（this）
2. 使用 class fileds 语法
    - handleClick=()=>{}
3. 再绑定的时候使用箭头函数回调
    - onclick={()=>this.handleClick()}
    - 缺点在于每次渲染这个组件的时候都会创建不同的回调函数
    - 造成性能差的问题
4. 关于传值问题
    - 如果我们只是传递的值 this.handleClick(attr)
    - 总所周知，我们通常是{this.handleClick}
    - 但是为了传递值 我们加上了括号 导致这个函数变成立即执行函数
    - 所以在 render 的时候就直接触发了事件处理函数
    - 导致 state 更新，state 更新就会导致再次渲染，这样一直触发下去
    - 解决方法两种 关键在于不直接调用
    1. ()=>this.handleClick(attr)
    2. this.handleClick.bind(this,attr)

# 阻止组件渲染

1. 如果希望能够隐藏组件
2. 在 render 方法直接返回 null
3. 但是即使返回 null 并不会影响组件的声明周期

# 列表遍历指明 key 值

1. 这个 key 只是在兄弟节点中需要唯一
2. key 的什么时候设定 常常是伴随着 map 遍历的时候
3. key 值并不会传递给组件 即 props.key 无法读取

-   提取组件的时机：map 嵌套过多层

# props.children

1. 对于某些组件 我们无法确定它的内部构造
2. 可能会是未来某个组件传递任意组件嵌套在它的内部 成为它的 children
3. 通过 props.children 可以将未来所有的子组件渲染在一个这个属性指定的位置

# state VS props

-   相同点

1. 都是 js 对象
2. 变化都会触发 render 更新
3. 都是确定性的

-   不同点

1. props 是传递给组件的（有点类似函数传参），state 是组件内部私有的（类似在函数内部的一个声明）
2. props 在组件内部不应该被修改，state 是可变的
3. setState 是`异步`的
4. 对于 setState 传递一个函数，函数可以访问到当前的 state 的值，形成链式更新

# react 哲学

1. 组件划分
    - 原则上 一个组件只负责一个功能
2. 静态版本
    - 简单项目=>从上而下编写组件
    - 大型项目=>从每一个底层组件开始编写测试
3. 确定 state
    - 对于 state，什么时候应该设置 state： 变化的 ，不能通过其它值计算得来的
4. state 位置
    - 找到一个会根据这个 state 变化的所有组件的公共父组件
5. 反向数据流
    - 管理 state 的组件 => 传递回调函数 => 触发 state 变化的组件 => state 有变化 => callback 告诉父组件 => setState 触发视图更新

# provider consumer

1. 有点类似 vue 的 provide,inject 不需要为每一层都提供 props 直接传递数据
2. 设计目的：`共享对于一个组件树而言是 全局 的数据`
3. 但是会造成组件的复用性变差

## 创建一个 context 对象

1. 通过 React.createContext({})创建

## 提供与接收

1. 通过 context.Provider 提供 后面紧跟着 value 属性
2. 接受方会向上查询离它最近的 provider 对象 没有匹配到时，声明 ctx 对象时的默认值就起到作用了

## 如何接受

-   三种方法

1. static contextType=Context 后续使用 this.context.property 取值
2. childComponent.contextType=Context 使用同上
3. 在 childComponent 外层嵌套一层 Context.customer
    - 这种方式比较特殊 `整体是一个对象 内部会返回一个函数`
    - 函数的参数为 context 提供的 value
    - 函数的返回值就是我们需要渲染出来的 view

# 错误边界

1. 什么是错误边界
    - 当组件中定义了下列两个属性时 它就是一个错误边界
    1. static getDerivedStateFromError 通常用来发生错误时修改 state 值 从而渲染备用 ui
    2. componentDidCatch 打印错误信息
2. 工作流程
    - 错误边界`只会捕捉子组件的错误`
    - 对于无法渲染的错误信息 会冒泡到最近的上层错误边界
3. react 16+ 对于未捕获错误的新行为
    - 任何未被错误边界捕捉的错误将会导致整个 react 组件被卸载
4. 关于事件处理
    - 因为事件处理函数并不会在 render 期间触发 所以错误边界无法捕获
    - 对于这类事件 通过我们可以使用 try catch 来捕捉

# ref

1. 通过 ref 指名道姓到我们需要的 element
2. 常常是我们通过 react.createRef 创建一个 ref 之后 通过父子组件一级一级的传递
3. 在需要指定的元素组件 我们使用 react.forwardRef 来创建这个组件
4. 它接受两个参数 一个是正常的 props 第二个参数即使我们需要传递的 ref 在组件内部通过这个参数进行指定
5. `ref属性并不是props属性，不会传递` 为了解决这个问题 通常使用对象的解构来单独拿出 ref

# 高阶组件 highOrderComponent

1. 高级组件是一个函数，他接受一个组件作为参数，返回一个新的组件
2. `不要在高阶组件中改变原组件`
3. 对于不相关的 props 不要传递 额外增强的请传递
4. 不要在 render 函数中使用 hoc

# hook

1. 为什么要有 hook
    - 之前的生命周期中常常伴随着数据请求，事件监听等 往往这些逻辑是不相关的
    - hooks 的存在将这些相互关联的部分拆分成更小的部分 并非按照生命周期强制划分
    - class 语法过于臃肿 不要 this！！！
2. 什么是 hook
    - hook 让我们在函数组件中 `钩入`state，生命周期函数
    - 在函数式组件中 我们没有 this
3. hook 使用规则
    1. 只能在`react函数中使用hook`
    2. 只在`最顶层使用hook` 否则会 hook 的调用顺序可能会失序 造成 bug

# useState

1. useState 返回的是一个数组 包含两个元素
2. 第一个元素即是我们的变量 也即是 state
3. 第二个元素即是改变变量的方法 也即是 setState
4. useState 接受唯一的一个参数就是初始值 initialValue
    - 这个参数是惰性的
    - 也就是说 此初始值只会在第一次渲染时生效
    - 甚至我们也可以传递一个函数 来计算复杂的初始值 （同样的，这个函数也只会在初始渲染的时候调用）
5. setState 也可以是接受一个函数 函数的参数为 state 前一次的值
6. 与 class 组件中的 this.setState 的不同点
    - 函数中的 setState 并不会自动合并更新对象
    - 对应的，我们可以使用...语法展开前一个 PreState，并附着新 Value 进行合并
    - 或者也可以使用 object.assign

# useEffect

1. dom 的副作用
    - 数据获取
    - 设置订阅
    - 操作 dom
2. 相当于我们在 class 语法中 componentDidMount，componentDidUpdate，componentWilleUnmount 的结合
3. 我们为什么要用 useEffect
    - 通过这个 hook，告诉 React 组件在渲染之后应该执行什么操作
4. useEffect 放在组件内部
    - 导致我们可以直接访问到 state 变量 （内部使用了闭包的机制）
5. useEffect 的默认执行时机 `第一次渲染!!之后!!，每次更新!!之后!!`
6. 和 componentDidMount 和 componentDidUpdate 不同，useEffect 调度的 effect 并不会阻塞浏览器更新屏幕
7. 对于需要清除的副作用
    - useEffect 提供可选的返回值 这是一个函数 也即是清除 cleanUp 函数
    - 清楚函数在每次重新渲染前都会执行清除上一个 effect 而不是只是在卸载阶段执行
8. 在一个函数式组件之中 我们可以存在多个 useState 也可以存在多个与之对应的 useEffect
9. useEffect 接受第二个参数
    - 通过第二个参数是否发生变化决定 useEffect 是否执行 这个参数是一个数组 里面包含了依赖的变量
    - 特殊的我们可以传递一个空数组[]，这样 useEffect 只会在挂载和卸载时候调用
    - []中的变量包含的是`会随时间变化的，在effect中使用了的变量`

# 自定义 hook

1. 当我们在两个函数之间共享逻辑时 把它提取到第三个函数
2. 自定义 hook 也是一个函数，`必须` 是 use 开头的（如此，react 才会帮助我们检查 hooks 规则）
3. 在多个 hook 之间传递信息
    - 因为 useState 返回给我们的都是当前 state 的最新值
    - 利用这个特性我们把 state 作为参数传递给自定义 hook 得到最新的变化
4. 说到底自定义 hook 就是相当于把多个函数组件之间共同的逻辑代码抽离成一个新的函数
5. 由于自定义 hook 是一种重用[状态逻辑]的机制 所以不同的组件使用相同的自定义 hook 并不会共享 state

# useRef

1. ref 对象内容发生变化 useRef 并不会通知
2. useRef 在每次渲染时返回指定的 ref 对象 其存在一个 current 属性指向 ref Dom
3. 变更 current 属性并不会造成组件的重新渲染
4. 更方便的 useRef 为我们提供了类似实例变量的东西 就像是 class 组件中的实例变量
5. 对于函数式组件 它是不支持绑定 ref 的
    - 此时 我们需要用 forwardRef 对原来的函数组件进行包裹
    - forwardRef 第二个参数即是我们需要传递的 ref

## 一个比较重要的顺序

1. 比如我们触发事件修改 state 时
2. 事件触发=>进入处理函数=>修改 state=>触发重渲染=>重渲染任务加入队列
3. =>重渲染（hooks 中函数体本身就是 render）=>重渲染之[后]，useEffect 触发（此时 state 已经被更改）

# 关于 JSX

1. <div />  <div></div>  <div>{true}</div>  <div>{false}</div>  <div>{null}</div>  <div>{undefined}</div> 是等价的
2. true false null undefined 是合法的子元素 它们并不会被渲染
3. 一个技巧
    - {<flag && Component />}
    - 仅当 flag 为 true 时 component 组件才会被渲染
    - 但是我们需要 flag 整体表达式一个布尔值
4. props.children 我们也可以传递参数

# Protal

1. 通过 ReactDOM.createProtal 返回一个组件
2. 两个参数
    - 第一个参数：正常需要渲染的视图
    - 第二个参数：需要将第一个参数视图插入的指定节点
3. 虽然我们最后渲染出来的结果 已经被插入到指定位置了 但是仍然可以通过事件冒泡机制找到它真正的父组件

# render props

1. render props 的存在给我们复用组件提供了更高的灵活性
2. 因为存在一些复用附件 不确定需要渲染什么视图 需要我们指明它需要渲染什么内容
3. 因此使用给复用组件传递 props 这是个特殊的 props 它是个函数
4. 在复用组件的指定位置处 我们使用在父组件中传递给复用组件的 prop 名字
5. {this.prop.propName(arg)}
