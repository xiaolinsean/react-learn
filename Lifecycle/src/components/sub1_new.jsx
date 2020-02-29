import React, { Component } from "react";

export default class Sub1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            innerValue: 0,
            prevProps:null
        }
        console.log("########## Sub1 constructor ##########");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("########## Sub1 getDerivedStateFromProps ##########");
        if (props !== state.prevProps) {
            return {
              innerValue: props * 2
            };
        }
        return null;
    }
    componentDidMount() {
        console.log("########## Sub1 componentDidMount ##########");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("########## Sub1 shouldComponentUpdate ##########");
        console.log(
            "this.props:" +
            JSON.stringify(this.props) +
            " ====== nextProps:" +
            JSON.stringify(nextProps)
        );
        console.log(
          "this.state:" +
            JSON.stringify(this.state) +
            " ====== nextState:" +
            JSON.stringify(nextState)
        );
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, preState) {
      console.log("========== Sub1 getSnapshotBeforeUpdate ==========");
      return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("########## Sub1 componentDidUpdate ##########");
        console.log(
          "this.props:" +
            JSON.stringify(this.props) +
            " ====== prevProps:" +
            JSON.stringify(prevProps)
        );
    }
    

    render() {
        
        // 错误边界处理测试
        if (!this.props.errTest) {
            throw new Error("I crashed!");
        }

        console.log("########## Sub1 render ##########");
        return (
            <>
                <div>========= sub1 =======</div>
                <div>{this.props.sub1Value}</div>
            </>
        )
    }
}