/**
 * title components
 */
import React, { PureComponent } from "react";
import "./style.css";
import { AppContext } from "../../context/context";

export default class Header extends PureComponent {
    // static contextType = AppContext;
    constructor(props,context){
        super(props);
    }
    
    render() {
        // console.log(this.context);

        return (
            <React.Fragment>
                <h3 className="title" style={{background:'blue'}}>{this.props.num}</h3>
            </React.Fragment>
        )
    }
}

