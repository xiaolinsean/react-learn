# React 中的 生命周期（Lifecycle） 版本（16.12.0）高于 16.4

react 的生命周期，再引入 Fiber 之后，react 的生命周期也有所变化，新增了一些生命周期函数，同时也建议使用者废弃一些生命周期函数，下面先对比一下 react v16.3 之前的生命周期与 react v16.4 及之后的生命周期函数。

---

## 一、生命周期图整体对比

### 1.1 react v16.3 之前版本

-   挂载

    当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

    -   constructor()
    -   componentWillMount() `(即将过时)`
    -   render()
    -   componentDidMount()

-   更新

    当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

    -   componentWillReceiveProps() `(即将过时)`
    -   shouldComponentUpdate()
    -   componentWillUpdate() `(即将过时)`
    -   render()
    -   componentDidUpdate()

-   卸载

    当组件从 DOM 中移除时会调用如下方法：

    -   componentWillUnmount()

### 1.2 react v16.4 开始的版本，可查看 [react 生命周期图谱](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

-   挂载

    当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：

    -   constructor()
    -   static getDerivedStateFromProps() `(新增)`
    -   render()
    -   componentDidMount()

-   更新

    当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：

    -   static getDerivedStateFromProps() `(新增)`
    -   shouldComponentUpdate()
    -   render()
    -   getSnapshotBeforeUpdate() `(新增)`
    -   componentDidUpdate()

-   卸载
    当组件从 DOM 中移除时会调用如下方法：

    -   componentWillUnmount()

-   错误处理
    当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

    -   static getDerivedStateFromError() `(新增)`
    -   componentDidCatch() `(新增)`

-   新增其他 APIs
    -   forceUpdate() `(新增)`

---

## 二、生命周期函数变动点

通过上面的对比，我们可以知道，老板生命周期中有三个生命周期函数将会被废弃，分别是：

-   `componentWillMount()`
-   `componentWillReceiveProps()`
-   `componentWillUpdate()`

这三个生命周期函数都是在 render 之前调用的，官方也指出，这三个生命周期方法经常被误解和滥用，而且因为 fiber 的出现，它们潜在的误用问题可能更大。

新增的为：

-   `getDerivedStateFromProps()`
-   `getSnapshotBeforeUpdate()`

对于废弃的生命周期函数，官方会采用逐步迁移的方式来实现版本的迁移：

-   16.3：为不安全的生命周期引入别名，UNSAFE_componentWillMount、UNSAFE_componentWillReceiveProps 和 UNSAFE_componentWillUpdate。（旧的生命周期名称和新的别名都可以在此版本中使用。）
-   未来 16.x 版本：为 componentWillMount、componentWillReceiveProps 和 componentWillUpdate 启用废弃告警。（旧的生命周期名称和新的别名都将在这个版本中工作，但是旧的名称在开发模式下会产生一个警告。）
-   17.0：删除 componentWillMount、componentWillReceiveProps 和 componentWillUpdate。（在此版本之后，只有新的 “UNSAFE\_” 生命周期名称可以使用。）

下面将逐个对变化的生命周期函数进行解析：

### 2.1 `componentWillMount()`

与 `componentWillMount()` 相关的注意点主要集中在以下三点：

-   初始化 state

    对于这种场景，完全可以将初始化 state 的操作放到 `constructor()` 中。

-   获取异步数据

    有一个常见的误解是，在 `componentWillMount` 中获取数据可以避免第一次渲染为空的状态。所以有一些开发喜欢在 `componentWillMount` 做获取异步数据操作。

    实际上，这是不对的，因为 React 总是在 `componentWillMount` 之后立即执行 `render`，而获取数据一般都是异步操作。如果在 `componentWillMount` 触发时数据不可用，那么第一次 `render` 仍然会显示加载的状态，而不管你在哪里初始化获取数据。

    而且，在 `componentWillMount` 做获取异步数据操作对于服务器渲染（不使用外部数据）和即将推出的异步渲染模式（可能多次启动请求）都存在问题。所以，获取异步数据这类场景建议统一放到 `componentDidMount` 中处理。

-   添加事件监听器（或订阅）

    如果我们在 componentWillMount 中增加，这可能导致服务器渲染（永远不会调用 componentWillUnmount）和异步渲染（在渲染完成之前可能被中断，导致不调用 componentWillUnmount）的内存泄漏。

    人们通常认为 componentWillMount 和 componentWillUnmount 是成对出现的，但这并不能保证。只有调用了 componentDidMount 之后，React 才能保证稍后调用 componentWillUnmount 进行清理。所以这类场景也可在 `componentDidMount` 中处理。

### 2.2 `componentWillReceiveProps()` 和 `componentWillUpdate()`

`componentWillReceiveProps()` 和 `componentWillUpdate()` 在 `render()`之前执行，而且可以获取的 当前和即将更新的 props 或 state，所以我们经常会在这两个生命周期中针对 props 或 state 变化时做一些逻辑处理。

-   基于 props 更新 state

    `componentWillReceiveProps(nextProps)` 函数中可以通过对比 `this.props` 和 `nextProps` 值的异同来做一些逻辑处理，例如基于 props 更新 state。从 16.3 版本开始，当 props 变化时，建议使用新的 static getDerivedStateFromProps 生命周期更新 state。创建组件以及每次组件由于 props 或 state 的改变而重新渲染时都会调用该生命周期。另外，`componentWillReceiveProps` 可能在一次更新中被多次调用。因此，避免在此方法中产生副作用非常重要。而且官网中也推荐 [派生 state 的简单替代方法](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html) 使组件可预测且可维护。

    `注意点：在更新阶段，只要父组件会重新render，那么组件的componentWillReceiveProps()就会重新执行，而不是一定需要props的值有改动。`

-   调用外部回调

    `componentWillUpdate(nextProps, nextState)` 函数中可以通过对比 `this.props` 和 `nextProps`,以及`this.state` 和 `nextState`来做一些逻辑处理。但是在异步模式下使用 `componentWillUpdate` 都是不安全的，因为外部回调可能会在一次更新中被多次调用。相反，应该使用 `componentDidUpdate` 生命周期，因为它保证每次更新只调用一次。这里需要注意一点就是两个生命周期函数执行时段不一样，`componentDidUpdate(prevProps, prevState)`是在 `render` 之后执行的，所以两者的入参有所区别。

-   props 更新时获取外部数据

    我们有时会在`componentWillReceiveProps(nextProps)` 和 `componentWillUpdate(nextProps, nextState)` 中对 props 的更新做判断，在 props 更新时获取外部数据.其实异步模式下使用 `componentWillReceiveProps(nextProps)` 和 `componentWillUpdate(nextProps, nextState)` 都是不安全的，都可能存在调用多次的情况。所以这次情况可以放在 `componentDidUpdate` 中处理，因为`componentDidUpdate` 在一次更新中可以保证只被调用一次。

-   更新前读取 DOM 属性

    `componentWillUpdate` 用于读取 DOM 属性。但是，对于异步渲染，“渲染”阶段的生命周期（如 `componentWillUpdate` 和 `render`）和”提交”阶段的生命周期（如 `componentDidUpdate`）之间可能存在延迟。如果这段时间内 DOM 属性发生了变化，那么从 `componentWillUpdate` 读取的 DOM 属性将过时。

    这个问题的解决方案是使用新的“提交”阶段生命周期 `getSnapshotBeforeUpdate`。这个方法在发生变化 前立即 被调用（例如在更新 DOM 之前）。它可以返回一个 React 的值(`snapshot`)作为参数传递给 `componentDidUpdate(prevProps, prevState, snapshot)` 方法，该方法在发生变化后立即被调用。

### 2.3 `getDerivedStateFromProps(props, state)`

新的 `getDerivedStateFromProps()` 生命周期方法是静态方法，所以在使用时，需要在前面加上 `static` 关键字，在组件实例化之后以及重新渲染之前调用。它可以返回一个对象来更新 state，或者返回 null 来表示新的 props 不需要任何 state 的更新。从方法的命名上也可以发现，该方法主要功能是实现上面的基于 props 更新 state。

### 2.4 `getSnapshotBeforeUpdate(prevProps, prevState)`

`getSnapshotBeforeUpdate(prevProps, prevState)` 生命周期方法在更新之前（如：更新 DOM 之前）被调用。此生命周期的返回值将作为第三个参数传递给 `componentDidUpdate`。（通常不需要，但在重新渲染过程中手动保留滚动位置等情况下非常有用。）主要针对上述的更新前读取 DOM 属性。

### 2.5 `getDerivedStateFromError()`

`getDerivedStateFromError()` 用于错误边界处理的生命周期函数，是静态方法, 与 `getDerivedStateFromProps()` 类似，使用时需要加上 `static` 关键字，并且返回一个对象来更新 state，只不过更新的 state 主要用于标识后代组件中出现了报错，但它本身的错误无法捕获。一般 我们用 `static getDerivedStateFromError()` 渲染备用 UI。

### 2.6 `componentDidCatch()`

我们一般使用 `componentDidCatch(error, info)` 来打印和收集错误信息。它接收两个参数：

-   error —— 抛出的错误。
-   info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。

`getDerivedStateFromError()` 和 `componentDidCatch()` 错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误

[关于更多的错误边界可参考官网描述:https://zh-hans.reactjs.org/docs/error-boundaries.html](https://zh-hans.reactjs.org/docs/error-boundaries.html)

### 2.7 `forceUpdate()`

调用 `forceUpdate()` 将致使组件调用 `render()` 方法，此操作会跳过该组件的 `shouldComponentUpdate()`。但其子组件会触发正常的生命周期方法，包括 `shouldComponentUpdate()` 方法。官方建议应该避免使用 forceUpdate()，尽量在 `render()` 中使用 `this.props` 和 `this.state`。

---

reference：

1、[https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://zh-hans.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)

2、[https://zh-hans.reactjs.org/docs/error-boundaries.html](https://zh-hans.reactjs.org/docs/error-boundaries.html)
