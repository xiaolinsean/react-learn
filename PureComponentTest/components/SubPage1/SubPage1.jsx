/**
 * title components
 */
import React, { Component } from "react";
import "./style.css";

export default class subPage1 extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        console.log("======== subPage1 render ========");
        return (
            <React.Fragment>
                <h6>===subPage1===</h6>
                <h3 className="title">{this.props.num}</h3>
            </React.Fragment>
        )
    }
}

