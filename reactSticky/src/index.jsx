import React, { Component } from "react";
import ReactDOM from "react-dom";
import { StickyContainer, Sticky } from 'react-sticky';
import './style.css';

function generateData(){
    let array = [] ;
    for (let i = 0; i < 20; i++) {
        array[i] = [];
        for (let j = 0; j < 20; j++) {
            array[i][j] = "" + i + '-' + j;
        }
    }
    return array;
}

class Index extends Component {
    

    render() {
        console.log("======== indexPage render ========");
        let arr = generateData();
        return (
            <div>
                <div>react-sticky demo</div>
                {
                    arr.map((item,index)=>{
                        return (
                            <StickyContainer>
                                <Sticky>
                                {({
                                    style,
                                }) => (
                                    <header style={{...style}}  className="header">
                                        {index}
                                    </header>
                                )}
                                
                                </Sticky>
                                {
                                    item.map((obj,i)=>{
                                        return (<div className="item" key={obj}>{obj}</div>)
                                    })
                                }
                            </StickyContainer>
                        )
                    })
                }
                
            </div>
        )
        
    }
}

ReactDOM.render(<Index />, document.querySelector('#content'));