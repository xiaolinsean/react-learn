import React, { Component } from "react";
import ReactDOM from "react-dom";

import './style.css';

import  SubPage1  from "../components/SubPage1/SubPage1";
import  SubPage2  from "../components/SubPage2/SubPage2";
import  SubPage3  from "../components/SubPage3/SubPage3";

class PageA extends Component {
    constructor(props) {
        super();
        this.state = {
            outerNum: 0,
            innerNum: 0,
            data:{
                innerNum: 0
            }
        }
    }
    componentDidMount(){
        
    }
    addOuterClick = () => {
        console.log("===== addOuterClick =====");
        this.setState({
            outerNum: ++this.state.outerNum
        })
    }

    addInnerClick = () => {
        console.log("===== addInnerClick =====");
        this.setState({
            innerNum: ++this.state.innerNum,
            data: {
                innerNum: ++this.state.data.innerNum
            }
        })
    }

    render() {
        console.log("======== indexPage render ========");
        let { outerNum ,innerNum, data} = this.state;
        return (
            <div>
                <button className="addOuter" onClick={this.addOuterClick}> add outer num</button>
                <button className="addInner" onClick={this.addInnerClick}> add inner num</button>
                <p>outer num: {outerNum}   |   inner num: {innerNum}</p>
                <SubPage1 num={innerNum}></SubPage1>
                <SubPage2 num={innerNum}></SubPage2>
                <SubPage3 data={data}></SubPage3>
            </div>
        )
        
    }
}

ReactDOM.render(<PageA />, document.querySelector('#content'));