## `react hooks`

### `为什么要使用 Hooks`

在 React 16.8 之前，函数组件也称为无状态组件，因为函数组件也不能访问 react 生命周期，也没有自己的状态。react 自 16.8 开始，引入了 Hooks 概念，使得函数组件中也可以拥有自己的状态，并且可以访问对应的生命周期。

我们应该在什么时候使用 Hooks 呢？
```
官方并不建议我们把原有的 class 组件，大规模重构成 Hooks，而是有一个渐进过程，首先，原有的函数组件如果需要自己的状态或者需要访问生命周期函数，那么用 Hooks 是再好不过了；另外就是，我们可以先在一些逻辑较简单的组件上尝试 Hooks ，在使用起来相对较熟悉，且组内人员比较能接受的前提下，再扩大 Hooks 的使用范围。
```

那么相对于传统class， Hooks 有哪些优势?
```
（1）State Hook 使得组件内的状态的设置和更新相对独立，这样便于对这些状态单独测试并复用。

（2）Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分，这样使得各个逻辑相对独立和清晰。
```

### `class 生命周期在 Hooks 中的实现`

Hooks 组件更接近于实现状态同步，而不是响应生命周期事件。但是，由于我们先熟悉的 class 的生命周期，在写代码时，难免会受此影响，那么 Hooks 中如何模拟 class 的中的生命周期呢：

总结：

|class 组件| Hooks 组件|
|-------|------|
| constructor | useState |
| getDerivedStateFromProps | useEffect 手动对比 props， 配合 useState 里面 update 函数 |
| shouldComponentUpdate | React.memo |
| render | 函数本身 |
| componentDidMount | useEffect 第二个参数为`[]` |
| componentDidUpdate | useEffect 配合useRef |
| componentWillUnmount | useEffect  里面返回的函数 |
| componentDidCatch | 无 |
| getDerivedStateFromError | 无 |
---

详细代码查看 UseEffectExample，其中注意事项：

- useState 只在初始化时执行一次，后面不再执行；

- useEffect 相当于是 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合，可以通过传参及其他逻辑，分别模拟这三个生命周期函数；

- useEffect 第二个参数是一个数组，如果数组为空时，则只执行一次（相当于componentDidMount）；如果数组中有值时，则该值更新时，useEffect 中的函数才会执行；如果没有第二个参数，则每次render时，useEffect 中的函数都会执行；

- React 保证了每次运行 effect 的同时，DOM 都已经更新完毕，也就是说 effect 中的获取的 state 是最新的，但是需要注意的是，effect 中返回的函数（其清除函数）中，获取到的 state 是更新前的。

- 传递给 useEffect 的函数在每次渲染中都会有所不同，这是刻意为之的。事实上这正是我们可以在 effect 中获取最新的 count 的值，而不用担心其过期的原因。每次我们重新渲染，都会生成新的 effect，替换掉之前的。某种意义上讲，effect 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染。

- effect 的清除阶段（返回函数）在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次。它会在调用一个新的 effect 之前对前一个 effect 进行清理，从而避免了我们手动去处理一些逻辑 。为了说明这一点，下面按时间列出一个可能会产生的订阅和取消订阅操作调用序列：
    ```jsx
    function FriendStatus(props) {
    // ...
    useEffect(() => {
        // ...
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });


    // Mount with { friend: { id: 100 } } props
    ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // 运行第一个 effect

    // Update with { friend: { id: 200 } } props
    ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // 清除上一个 effect
    ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // 运行下一个 effect

    // Update with { friend: { id: 300 } } props
    ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // 清除上一个 effect
    ChatAPI.subscribeToFriendStatus(300, handleStatusChange);     // 运行下一个 effect

    // Unmount
    ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // 清除最后一个 effect
    ```


