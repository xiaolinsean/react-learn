import React, { useState, useEffect, useRef, memo } from 'react';

const UseEffectExample = memo((props) => {
    console.log("===== UseStateExample render=======");
    // 声明一个叫 “count” 的 state 变量。
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [fatherCount, setFatherCount] = useState(props.fatherCount)

    console.log(props);

    // 模拟 getDerivedStateFromProps
    useEffect(() => {
        // props.fatherCount 有更新，才执行对应的修改，没有更新执行另外的逻辑
        if(props.fatherCount == fatherCount ){
            console.log("======= 模拟 getDerivedStateFromProps=======");
            console.log(props.fatherCount, fatherCount);
        }else{
            setFatherCount(props.fatherCount);
            console.log(props.fatherCount, fatherCount);
        }
    })

    // 模拟DidMount
    useEffect(() => {
        console.log("=======只渲染一次(相当于DidMount)=======");
        console.log(count);

    }, [])

    // 模拟DidUpdate
    const mounted = useRef();
    useEffect(() => {
        console.log(mounted);
        if (!mounted.current) {
            mounted.current = true;
          } else {
            console.log("======count 改变时才执行(相当于DidUpdate)=========");
            console.log(count);
          }
    }, [count])

    // 模拟 Didmount和DidUpdate 、 unmount
    useEffect(() => {
        console.log("======初始化、或者 count 改变时才执行(相当于Didmount和DidUpdate)=========");
        console.log(count);
        return () => {
            console.log("====unmount=======");
            console.log(count);
        }
    }, [count])


    return (
        <div>
            <p>You clicked {count} times</p>
            <div className="btn" onClick={() => setCount(count + 1)}>
                Click me
            </div>

            <div className="btn" onClick={() => setCount2(count2 + 1)}>
                Click me2
            </div>
        </div>
    );
});

export default UseEffectExample;