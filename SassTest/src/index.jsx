import React, { Component } from "react";
import ReactDOM from "react-dom";

import './style.scss';

class Index extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }

    render() {
        return (
            <div>
                <div className="header"></div>
            </div>
        )
        
    }
}

ReactDOM.render(<Index />, document.querySelector('#content'));