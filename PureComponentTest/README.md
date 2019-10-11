# React 中的 PureComponent Vs Component

## PureComponent的作用：
PureComponent 其实是在内部帮我们简单实现了一下shouldComponentUpdate的功能，以便提供组件的性能；这里的简单指是：对prop和state做浅比较，若浅比较结果相同，则该组件以及其子组件不做render；否则，render。

以下为一个示例：

主页面`index.jsx`中有两个加数器：
- `add outer num`：控制`index.jsx`中的num
- `add inner num`：控制`subPage1.jsx`和`subPage1.jsx`中的num，通过props传递给子组件，不同的是`subPage1.jsx`用的Component，`subPage1.jsx`引用的PureComponent。

当点击`add outer num`按钮时，改变了index中的outer num，从控制打印信息可以看出：indexPage 和 subPage1都重新render了，但是 subPage2 没有重新render，可以看出，这里subPage2中的PureComponent 帮我们做了优化。

当点击`add inner num`按钮时，改变了index中的inner num，并且通过props传递给了子组件，从控制打印信息可以看出：indexPage 、 subPage1 和 subPage2  都重新render了，因为 subPage2 中的PureComponent检测到前后两个props不一样，所以做重新render。

## 注意事项：
- PureComponent主要针对prop和state为基本数据类型，如bool、string、number；
- 对于数组和对象等引用类型，则要引用不同，才会渲染；如果引用相同，则PureComponent浅比较返回结果相同，不做render；如果subpage3中代码所示；
- PureComponent 中不建议再另外重写`shouldComponentUpdate`方法，否则会报warning信息：
  `react-dom.development.js:558 Warning: subPage3 has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.`
- PureComponent的最好作为展示组件，如果prop和state每次都会变，PureComponent做浅比较也会影响性能，可以考虑直接用Component；
- 对于prop和state数据结构比较复杂的情况，可以考虑自己重写`shouldComponentUpdate`方法来做优化；