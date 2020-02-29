import React, { Component } from "react";
import ReactDOM from "react-dom";

import './style.css';

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
      counter: this.state.counter + 1
    });
    console.log(this.state.counter);
  };

  //   hanldClick = () => {
  //     this.setState(
  //       {
  //         counter: this.state.counter + 1
  //       },
  //       () => {
  //         console.log(this.state.counter);
  //       }
  //     );
  //     this.setState(
  //       {
  //         counter2: this.state.counter2 + 2
  //       },
  //       () => {
  //         console.log(this.state.counter2);
  //       }
  //     );
  //   };
  // 批量执行
  // hanldClick = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // };

  // 第一个函数入参
  //   hanldClick = () => {
  //     this.setState(
  //       (state, props) => ({
  //         counter: state.counter + 1
  //       }),
  //       () => {
  //         console.log(this.state.counter); // 3
  //       }
  //     );
  //     this.setState(
  //       (state, props) => ({
  //         counter: state.counter + 1
  //       }),
  //       () => {
  //         console.log(this.state.counter); // 3
  //       }
  //     );
  //     this.setState(
  //       (state, props) => ({
  //         counter: state.counter + 1
  //       }),
  //       () => {
  //         console.log(this.state.counter); // 3
  //       }
  //     );
  //     console.log(this.state.counter); // 0
  //   };

  // settimeout
  hanldClick = () => {
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

  render() {
    console.log("======== indexPage render ========");
    console.log(this.state);
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <p>counter2: {this.state.counter}</p>
        <button onClick={this.hanldClick}>增加</button>
        <button id="btn">原生事件</button>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector('#content'));