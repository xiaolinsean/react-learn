import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import pageWrapHOC from '../components/HOC/index';
import './style.css';

class Index extends Component {
    componentDidMount() {}

    render() {
        // console.log(this.a.b);
        return <div>this is my page {this.props.isLogin}</div>;
    }
}

let Content = pageWrapHOC(Index, { needLogin: true });

ReactDOM.render(<Content />, document.querySelector('#content'));
