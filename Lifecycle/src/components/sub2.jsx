import React, { Component } from "react";

export default class Sub2 extends Component{
    constructor(props) {
        super(props);
        console.log("*********** Sub2 componentDidUpdate ***********");
    }

    // static getDerivedStateFromProps() {
    //     console.log("========== Sub2 getDerivedStateFromProps ==========");
    //     return null;
    // }
    UNSAFE_componentWillMount() {
        console.log("*********** Sub2 UNSAFE_componentWillMount ***********");
    }
    componentDidMount() {
        console.log("*********** Sub2 componentDidMount ***********");
    }
    UNSAFE_componentWillReceiveProps(){
        console.log(
          "*********** Sub2 UNSAFE_componentWillReceiveProps ***********"
        );
    }
    UNSAFE_componentWillUpdate(){
        console.log("*********** Sub2 UNSAFE_componentWillUpdate ***********");
    }
    shouldComponentUpdate() {
        console.log("########## Sub2 shouldComponentUpdate ##########");
        return true;
    }
    componentDidUpdate() {
        console.log("*********** Sub2 componentDidUpdate ***********");
    }

    // getSnapshotBeforeUpdate() {
    //   console.log("========== Sub2 getSnapshotBeforeUpdate ==========");
    // }

    render() {
        console.log("*********** render componentDidUpdate ***********");
        return (
            <>
                <div>========= sub2 =======</div>
                <div>{this.props.sub2Value}</div>
            </>
        )
    }
}