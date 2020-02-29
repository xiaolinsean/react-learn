# React 中 setState 使用注意事项

## 1. 不能直接设置this.state

   这个基本学习过 react 的读者都不会犯这样的错，直接设置 this.state 的值并不能触发组件 `render()`,正确的是调用 `setState()` 函数来处理。

## 2. `setState()` 回调函数

   我们在用 `setState()` 时，疑惑比较多的地方就是 `setState()` 可能不会立即生效。基于这一点，慢慢地我们就形成了 `setState()` 总是异步执行的假象。其实官方文档里也说的是`可能不会立即生效`，后面会讲到立即生效的场景。其实 `setState()` 会批量推迟更新。这使得在调用 setState() 后立即读取 this.state 成为了隐患。例如以下示例：
   ``` jsx
   hanldClick = () => {
      // 初始counter=0
      this.setState({
         counter: this.state.counter + 1
      });
      console.log(this.state.counter); // 0
   };
   ```
   在 `setState()` 之后直接调用取 `counter` 的值的话，其实取到的还是生效之前的值,如果我们想要在 `counter` 生效之后取值的话，可以使用 componentDidUpdate 或者 setState 的回调函数（setState(updater, callback)），这两种方式都可以保证在应用更新后触发。我们常用的方式就是 setState 的第二个入参（回调函数）。上述的示例就可以修改成如下：
   ``` jsx
   hanldClick = () => {
      // 初始counter=0
      this.setState({
         counter: this.state.counter + 1
      },()=>{
         console.log(this.state.counter); // 1
      });
   };
   ```

   如果在 render 中也加上打印信息，可以发现，上述的打印信息会在 render 之后打印。

## 3. `setState()` 批量执行

   我们将上面的示例变更一下：
   ```jsx
   hanldClick = () => {
      this.setState(
         {
            counter: this.state.counter + 1
         },
         () => {
            console.log(this.state.counter);
         }
      );
      this.setState(
         {
            counter2: this.state.counter2 + 2
         },
         () => {
            console.log(this.state.counter2);
         }
      );
   };
   ```
   在 render 里也加上打印信息，我们可以发现上述操作并不会出发两次 render ,而是将两次 `setState()` 合并在一起执行了，与下面是等效的：
   ```jsx
   hanldClick = () => {
      this.setState(
         {
            counter: this.state.counter + 1,
            counter2: this.state.counter2 + 2
         },
         () => {
            console.log(this.state.counter);
            console.log(this.state.counter2);
         }
      );
   };
   ```

   再看下面一个示例：

   ```jsx
   hanldClick = () => {
      // 初始counter=0
      this.setState({
        counter: this.state.counter + 1
      });
      this.setState({
        counter: this.state.counter + 1
      });
      this.setState({
        counter: this.state.counter + 1
      });
    };
   ```
   上述操作生效后，counter 的值为 1，而不是 3。这是因为 `setState()` 不一定是立即生效的，而且是批量执行，所以上述的 三个 `setState()` 中 拿到的 `this.state.counter` 值都是 0，所以合并起来就等效与：
   ```jsx
   hanldClick = () => {
      // 初始counter=0
      this.setState({
        counter: this.state.counter + 1
      });
    };
   ```
   如果要实现上述的操作，可以采用以下 `setState()` 第一个入参为函数的方法。

## 4. `setState()` 第一个入参为函数

   从[官方文档(https://zh-hans.reactjs.org/docs/react-component.html#setstate)中可知，`setState()` 第一个参数除了可以传一个对象（nextState，nextState会与当前state做浅 merge 操作），还可以传函数，该函数中接收的 state 和 props 都保证为最新，且返回值会与 state 进行浅 merge 操作。：
   ```js
   void setState (
      function|object nextState,
      [function callback]
   )
   ```

   因此要实现上述的场景，就可以改写成如下：

   ```jsx
   hanldClick = () => {
      // 初始counter=0
      this.setState((state,props)=>({
         counter: state.counter + 1
      }),()=>{
         console.log(this.state.counter); // 3
      });
      this.setState((state, props) => ({
         counter: state.counter + 1
      }),()=>{
         console.log(this.state.counter); // 3
      });
      this.setState((state, props) => ({
         counter: state.counter + 1
      }),()=>{
         console.log(this.state.counter); // 3
      });
      console.log(this.state.counter); // 0
   };
  ```

## 5. 原生事件中修改状态

   先看一个示例：
   ```jsx
   class Index extends Component {
      constructor(props) {
         super();
         this.state = {
            counter: 0,
            counter2: 0
         };
      }
      componentDidMount() {
         let elem = document.getElementById("btn");
         elem.addEventListener("click", this.changeValue, false);
      }

      changeValue = () => {    
         this.setState({
               counter: this.state.counter+1
         });
         console.log(this.state.counter) 
      }

      hanldClick = () => {
         this.setState({
            counter: this.state.counter + 1
         });
         console.log(this.state.counter) 
      };

      render() {
         console.log("======== indexPage render ========");
         console.log(this.state);
         return (
            <div>
            <p>counter: {this.state.counter}</p>
            <button onClick={this.hanldClick}>增加</button>
            <button id="btn">原生事件</button>
            </div>
         );
      }
   }
   ```
   通过原生事件方式添加的点击事件中 `changeValue` 中的打印信息可以直接打印出变更之后的 `counter`, 而通过react的 `onClick` 事件中的打印信息却还是变更之前的值。

   在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中回头再说，而 isBatchingUpdates 默认是 false，也就表示 setState 会同步更新 this.state，但是，有一个函数 batchedUpdates，这个函数会把 isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会调用这个 batchedUpdates，造成的后果，就是由 React 控制的事件处理过程 setState 不会同步更新 this.state。

   - 也就是说上述的 `onClick` 是 React 控制的事件处理过程，所以 isBatchingUpdates 修改为 true，导致不会同步更新this.state；

   - 而添加的原生事件不会修改 isBatchingUpdates 的值，还是默认 false, 所以会同步更新 this.state。

## 6. setTimeout
   
   我们在上面的 hanldClick 中加一个 setTimeout 逻辑：

   ```js
   hanldClick = () => {
      // 初始counter=0
      this.setState({
         counter: this.state.counter + 1
      });
      console.log(this.state.counter); // 0

      setTimeout(() => {
         this.setState({
            counter: this.state.counter + 1
         });
         console.log(this.state.counter); // 2
         this.setState({
            counter: this.state.counter + 1
         });
         console.log(this.state.counter); // 3
      }, 0);
   };
   ```
   上述第一个 `setState()` 之后打印 0 的原因上面已经提到过了。至于后面 `setTimeout` 中的打印结果，可能会有一些疑惑。其实还是 isBatchingUpdates 值的原因，因为 setTimeout 里面的回调函数已经不是是 React 控制的事件处理过程了， isBatchingUpdates 的值还是默认的 false, 所以会同步更新 this.state。



   ---
   reference：
   1、[https://zh-hans.reactjs.org/docs/react-component.html#setstate](https://zh-hans.reactjs.org/docs/react-component.html#setstate)

   2、[https://www.zhihu.com/question/66749082/answer/246217812](https://www.zhihu.com/question/66749082/answer/246217812)