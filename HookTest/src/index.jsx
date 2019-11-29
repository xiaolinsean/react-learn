import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

import Header from "../components/Header/Header";

import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        
    }

    render() {
       
        return (
            <div style={{width:"100%"}}>
                <Header/>
            </div>
        )
        
    }
}

ReactDOM.render(<App />, document.querySelector('#content'));