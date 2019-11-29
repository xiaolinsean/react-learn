/**
 * title components
 */
import React, { Component } from "react";
import "./style.css";
import { AppContext } from "../../context/context";
import { Header } from "../Header/Header";
export default class subPage1 extends Component {
    constructor(props,context){
        super(props);
        console.log("=========constructor=========");
        console.log(context);
    }

    shouldComponentUpdate(nextProps, nextState, nextContex){
        console.log("nextContex");
        console.log(nextContex);
        return true;
    }
    
    render() {
        console.log("======== subPage1 render ========");
        return (
            <AppContext.Consumer>
                {
                    context => (
                        <React.Fragment>
                            <h6>===subPage1===</h6>
                            <h3 className="title">{this.props.num} || {context.num}</h3>
                            {/* <Header></Header> */}
                        </React.Fragment>
                    )
                }
            </AppContext.Consumer>
        )
    }
}

