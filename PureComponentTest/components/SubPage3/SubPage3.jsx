/**
 * title components
 */
import React, { PureComponent } from "react";
import "./style.css";

export default class subPage3 extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            data:{
                num: 0
            }
        }
    }

    handClick = () => {
        console.log("====== subpage3 click =======");
        let data = this.state.data;
        data.num = data.num++;
        this.setState({
            data
        })
    }
    /**
     * PureComponent中如果使用会有错误提示：shouldComponentUpdate
     * Warning: subPage3 has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.
     */
    shouldComponentUpdate(nextProps, nextState) {
        return (nextState.data.num !== this.state.data.num);
    }
    
    render() {
        console.log("======== subPage3 render object ========");
        return (
            <React.Fragment>
                <h6>===subPage3===</h6>
                <button onClick={this.handClick}>add num</button>
                <h3 className="title">{this.state.data.num}</h3>
            </React.Fragment>
        )
    }
}

