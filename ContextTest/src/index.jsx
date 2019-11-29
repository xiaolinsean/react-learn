import React, { Component } from "react";
import ReactDOM from "react-dom";

import './style.css';

import  SubPage1  from "../components/SubPage1/SubPage1";
import { AppContext } from "../context/context";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0,
            AppContextData: {
                backgroudColor: 'red',
                num: 0,
            }
        }

    }
    componentDidMount(){
        
    }

    addInnerClick = () => {
        console.log("===== addInnerClick =====");
        let AppContextData = this.state.AppContextData;
        AppContextData.num = AppContextData.num + 1
        this.setState({
            num: ++this.state.num,
            AppContextData
        })
    }

    render() {
        console.log("======== indexPage render ========");
        let { num, AppContextData} = this.state;
        return (
            <div style={{width:"100%"}}>
                <button className="addInner" onClick={this.addInnerClick}> add inner num</button>
                <p>number: {num} </p>
                <hr/>
                <AppContext.Provider value={AppContextData}>
                    <SubPage1 num={num}></SubPage1>
                </AppContext.Provider>
                
            </div>
        )
        
    }
}

ReactDOM.render(<App />, document.querySelector('#content'));