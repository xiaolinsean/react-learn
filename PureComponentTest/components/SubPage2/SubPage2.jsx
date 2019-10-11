/**
 * title components
 */
import React, { PureComponent } from "react";
import "./style.css";

export default class subPage2 extends PureComponent {
    constructor(props){
        super(props);
    }
    
    render() {
        console.log("======== subPage2 render ========");
        return (
            <React.Fragment>
                <h6>===subPage2===</h6>
                <h3 className="title">{this.props.num}</h3>
            </React.Fragment>
        )
    }
}

