import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class ClassCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
    }
    handerClick = () => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.setState({ number: this.state.number + 1 });
                console.log(this.state.number);
            }, 1000);
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.handerClick}>num++</button>
            </div>
        );
    }
}
