import React, { Component } from "react";

export default class Sub1 extends Component {
    constructor(props) {
        super(props);
        console.log("########## Sub1 constructor ##########");
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log("========== Sub1 getDerivedStateFromProps ==========");
    //     return null;
    // }
    UNSAFE_componentWillMount() {
        console.log("########## Sub1 UNSAFE_componentWillMount ##########");
    }
    componentDidMount() {
        console.log("########## Sub1 componentDidMount ##########");
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log(
          "########## Sub1 UNSAFE_componentWillReceiveProps ##########"
        );
        console.log(
          "this.props:" +
            JSON.stringify(this.props) +
            " ====== nextProps:" +
            JSON.stringify(nextProps)
        );
    }
    UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log("########## Sub1 UNSAFE_componentWillUpdate ##########");
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("########## Sub1 componentDidUpdate ##########");
        console.log(
          "this.props:" +
            JSON.stringify(this.props) +
            " ====== prevProps:" +
            JSON.stringify(prevProps)
        );
    }

    // getSnapshotBeforeUpdate(prevProps, preState) {
    //   console.log("========== Sub1 getSnapshotBeforeUpdate ==========");
    // }

    render() {
        console.log("########## Sub1 render ##########");
        return (
            <>
                <div>========= sub1 =======</div>
                <div>{this.props.sub1Value}</div>
            </>
        )
    }
}