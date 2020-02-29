/**
 * title components
 */
import React from "react";
import "./style.css";

const subPage4 = (props) => {
    console.log("======== subPage4 render ========");
    return (
        <React.Fragment>
            <h6>===subPage4===</h6>
            <h3 className="title">{props.num}</h3>
        </React.Fragment>
    )
}

export default subPage4;
