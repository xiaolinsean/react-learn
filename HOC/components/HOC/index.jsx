import React, { Component } from 'react';

export default function pageWrapHOC(WrapperComponent, { needLogin = true }) {
    return class PageWrapHOC extends Component {
        static getDerivedStateFromError() {
            console.log('something went wrong');
        }

        static getDerivedStateFromProps() {}

        constructor() {
            super();
            this.state = {
                isLogin: false,
                isLoading: true,
            };
        }

        componentDidMount() {
            console.log('wrapper didmount');
            // check login
            setTimeout(() => {
                this.setState({
                    isLogin: true,
                    isLoading: false,
                });
            }, 3000);
        }

        getSnapshotBeforeUpdate() {}

        componentDidCatch(error, info) {
            console.log(error);
            console.log(info);
        }

        componentWillUnmount() {}

        render() {
            const { isLogin, isLoading } = this.state;
            if (isLoading) {
                return <div>loading.....</div>;
            } else if (!isLogin) {
                return <div>not login</div>;
            } else {
                return <WrapperComponent isLogin={isLogin} />;
            }
        }
    };
}
