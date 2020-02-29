import React, { Component } from "react";
import ReactDOM from "react-dom";

import './style.css';

import Sub1 from './components/sub1';
import Sub2 from './components/sub2';

class Index extends Component {
  constructor(props) {
    console.log("========== index constructor ==========");
    super(props);
    this.state = {
      indexValue: 0,
      sub1Value: 0,
      sub2Value: 0
    };
  }

  //   static getDerivedStateFromProps() {
  //     console.log("========== index getDerivedStateFromProps ==========");
  //     return null;
  //   }

  UNSAFE_componentWillMount() {
    console.log("========== index UNSAFE_componentWillMount ==========");
  }
  componentDidMount() {
    console.log("========== index componentDidMount ==========");
  }

  UNSAFE_componentWillUpdate() {
    console.log("========== index UNSAFE_componentWillUpdate ==========");
  }
  //   shouldComponentUpdate() {
  //     console.log("========== index shouldComponentUpdate ==========");
  //     return true;
  //   }
  componentDidUpdate() {
    console.log("========== index componentDidUpdate ==========");
  }
  // getSnapshotBeforeUpdate(prevProps, preState) {
  //   console.log("========== index getSnapshotBeforeUpdate ==========");
  // }

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

  render() {
    console.log("========== index render ==========");
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
        <button
          onClick={() => {
            this.handleClick(2);
          }}
        >
          点击sub2加1
        </button>
        <p>indexValue:{this.state.indexValue}</p>
        <p></p>
        <Sub1 sub1Value={this.state.sub1Value} />
        <Sub2 sub2Value={this.state.sub2Value} />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector('#content'));