import React, { Component } from "react";
import ReactDOM from "react-dom";

import './style.css';

class Index extends Component {
    constructor(props) {
        super();
        this.state = {
            inputValue: "defaultValue"
        }
        this.uncontroledInput = React.createRef();
    }
    componentDidMount(){
    }

    handleInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        console.log("======== indexPage render ========");
        let { inputValue } = this.state;
        console.log("受控组件：" + inputValue);
        this.uncontroledInput.current && console.log("非受控组件：" + this.uncontroledInput.current.value);
        return (
            <div>
                <p>受控组件：</p>
                <input type="text" value={inputValue} onChange={this.handleInput}/>
                <br/>
                <p>非受控组件：</p>
                <input type="text" defaultValue="defaultValue" ref={this.uncontroledInput}/>
            </div>
        )
        
    }
}

ReactDOM.render(<Index />, document.querySelector('#content'));