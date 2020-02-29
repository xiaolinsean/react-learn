import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.css";

import Sub1 from "./components/sub1_new";

class Index extends Component {
  constructor(props) {
    console.log("========== index constructor ==========");
    super(props);
    this.state = {
      indexValue: 0,
      sub1Value: 0,
      sub2Value: 0,
      hasError: false,
      errTest:{}
    };
  }

//   static getDerivedStateFromProps(props, state) {
//     console.log("========== index getDerivedStateFromProps ==========");
//     return null;
//   }
  componentDidMount() {
    console.log("========== index componentDidMount ==========");
  }
  shouldComponentUpdate() {
    console.log("========== index shouldComponentUpdate ==========");
    return true;
  }
  componentDidUpdate() {
    console.log("========== index componentDidUpdate ==========");
  }
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log("========== index getSnapshotBeforeUpdate ==========");
    return null;
  }

  static getDerivedStateFromError() {
    console.log("========== index getDerivedStateFromError ==========");
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("========== index componentDidCatch ==========");
    console.log(error);
    console.log(info);
  }

  handleClick = index => {
    if (index == 1) {
      this.setState({
        sub1Value: this.state.sub1Value + 1
      });
    } else if (index == 2) {
      this.setState({
        sub2Value: this.state.sub2Value + 1
      });
    } else {
      this.setState({
        indexValue: this.state.indexValue + 1
      });
    }
  };

  handleError = () => {
      this.setState({
        errTest:null
      });
  }

  render() {
    console.log("========== index render ==========");
    console.log(this.state);
    
    return (
      <div>
        <p>============= Index ==========</p>
        <button
          onClick={() => {
            this.handleClick(0);
          }}
        >
          点击index加1
        </button>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
        >
          点击sub1加1
        </button>
        <button onClick={this.handleError}>是否抛错</button>
        <p>indexValue:{this.state.indexValue}</p>
        {this.state.hasError ? (
          <p>sub1 went wrong</p>
        ) : (
          <Sub1 sub1Value={this.state.sub1Value} errTest={this.state.errTest}/>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector("#content"));
