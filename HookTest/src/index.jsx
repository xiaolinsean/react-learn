import React, { Component, useState, useMemo } from "react";
import ReactDOM from "react-dom";

import UseEffectExample from "../components/useEffectExample/index";

import './style.css';

const App = () => {
    console.log("===== index render =======");
    const [isCountShow, setCountShow] = useState(true);
    let [fatherCount, setFatherCount] = useState(100);
    const [fatherCount2, setFatherCount2] = useState(100);

    return (
        <div style={{width:"100%"}}>
            <div className="btn" onClick={()=> setFatherCount(fatherCount + 100)}>father count</div>
            <div className="btn" onClick={()=> setFatherCount2(fatherCount2 + 100)}>father count2</div>

            <div className="section">
                <div className='title'>UseEffectExample</div>
                {isCountShow ? <UseEffectExample fatherCount={fatherCount}/> : ''}
                <div className="btn" onClick={()=>{setCountShow(!isCountShow)}}>remove/add conut</div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#content'));