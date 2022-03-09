import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    useQuery,
    queryCache,
    QueryClient,
    useQueryClient,
    QueryClientProvider,
    refetch,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';
import './style.css';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const Index = () => {
    const [showList2, setshowList2] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setshowList2(true);
        }, 1000);
    }, []);
    return (
        <QueryClientProvider client={queryClient}>
            <List />
            {showList2 ? <List2 /> : ''}
            <List3 />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

const List = () => {
    const queryClient = useQueryClient();

    const result = useQuery(
        'list1',
        async () => {
            console.log('get list1');
            const { data } = await axios.get('/mall/api/CRH-MALLY005');
            return data;
        },
        {
            // refetchOnWindowFocus: true, // 窗口获得焦点时是否重新发送请求
            staleTime: 10000,
            // enabled: false
        }
    );

    function handleClick() {
        console.log('1111');
        // 这里不直接使用 queryCache， 而是使用 queryClient
        queryClient.invalidateQueries('list1');
    }

    console.log('===render list =====');
    console.log(result);
    // console.log(rest); // 查看其它数据

    return (
        <div>
            react query
            <button onClick={handleClick}>点击缓存失效，重新发请求</button>
        </div>
    );
};

const List2 = () => {
    const queryClient = useQueryClient();

    const result = useQuery(
        'list1',
        async () => {
            console.log('get list2');
            const { data } = await axios.get('/mall/api/CRH-MALLY005');
            return data;
        },
        {
            // refetchOnWindowFocus: true, // 窗口获得焦点时是否重新发送请求
            staleTime: 10000,
            // enabled: false
        }
    );

    function handleClick() {
        console.log('1111');
        // 这里不直接使用 queryCache， 而是使用 queryClient
        queryClient.invalidateQueries('list1');
    }

    console.log('===render list2 =====');
    console.log(result);
    // console.log(rest); // 查看其它数据

    return (
        <div>
            react query
            <button onClick={handleClick}>点击缓存失效，重新发请求</button>
        </div>
    );
};

const List3 = () => {
    const queryClient = useQueryClient();

    const [isChosen, setisChosen] = useState(true);

    const { refetch: refetchList3, ...rest } = useQuery(
        'list3',
        async () => {
            console.log('get list3');
            const { data } = await axios.get('/mall/api/CRH-MALLY006');
            return data;
        },
        {
            // refetchOnWindowFocus: true, // 窗口获得焦点时是否重新发送请求
            staleTime: 10000,
            enabled: isChosen,
        }
    );

    function handleClick() {
        console.log('1111');
        // 这里不直接使用 queryCache， 而是使用 queryClient
        setisChosen(false);
        // queryClient.invalidateQueries('list3')
        refetchList3();
    }

    console.log('===render list3 =====');
    console.log(rest);
    // console.log(rest); // 查看其它数据

    return (
        <div>
            react query
            <button onClick={handleClick}>点击发请求</button>
        </div>
    );
};

ReactDOM.render(<Index />, document.querySelector('#content'));
