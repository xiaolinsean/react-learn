## react query


### 1、基本使用

安装

```shell
yarn add react-query
```

基本使用

```jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useQuery, queryCache, QueryClient, useQueryClient, QueryClientProvider  } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient(); // 初始化实例

const Index = () => {

    return (
        // 组件需要包裹在 QueryClientProvider 内
        <QueryClientProvider client={queryClient}>
            <List />
        </QueryClientProvider>
    )
}

const List = () => {

    const queryClient = useQueryClient()

    const {data, ...rest} = useQuery(
        'list',
        async () => { const {data} = await axios.get('/mall/api/test1'); return data;}
    );

    console.log(data);
    console.log(rest);

    return (
        <div>
            react query
        </div>
    )
}

ReactDOM.render(<Index />, document.querySelector('#content'));

```

- （1） `useQuery` 组件需要包裹在 `QueryClientProvider` 内；
- （2） react query 需要在 React v16.8+ 才支持。

### 2、调试

`react query` 中的 `devtools` 已经集成到了 `react-query/devtools` 中， 不需要再安装其他包了，按如下示例即可在页面中打开 `devtools`

```jsx
import { ReactQueryDevtools } from 'react-query/devtools'

const Index = () => {

    return (
        <QueryClientProvider client={queryClient}>
            {/* The rest of your application  */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
```

当 `process.env.NODE_ENV === 'production'` 时，会自动移除 `react-query/devtools`

### 3、基本概念

- 通过 `useQuery` or `useInfiniteQuery` 实例化的 `Query` 默认为：缓存数据是失效的。不过我们可以通过设置 `staleTime ` 来延长失效时间；
- 为了避免后续会再使用到缓存中的失效数据，失效的数据不会立马从缓存中清除，一般会在 5 * 1000 * 60 （5min）后被垃圾回收机制回收；
- 失效的数据在以下情况下会被重新请求
  - （1）查询实例重新被创建（refetchOnMount）
  - （2）窗口重新聚焦 （refetchOnWindowFocus）
  - （3）网络重新连接 （refetchOnReconnect）
  - （4）配置了重新获取间隔时间 （refetchInterval）


### 4、 `useQuery` 入参

使用 `useQuery` 时，至少需要保证入参里有：

- 唯一性的查询键 （Query Keys）
- 调用函数，返回一个 promise 结果，可以使 resolve 数据，也可以是 Error

```jsx
const result = useQuery('todos', async () => {
        if (somethingGoesWrong) {
            throw new Error('Oh no!')
        }
        
        return data
    },
    config
)
```
`config` 是配置参数对象（可选），如果不配置的取默认配置。

上面是函数参数形式，也可以使用查询对象形式，如下：

```jsx
const result = useQuery({
   queryKey: ['todo', 7],
   queryFn: fetchTodo,
   ...config,
 })
```



### 5、 查询键 （Query Keys）

查询键可以选择字符串、字符串数组、嵌套对象数组：

```js
// 字符串
 useQuery('todos', ...) // queryKey === ['todos']
```

```js
// 数组
useQuery(['todo', 5], ...) // queryKey === ['todo', 5]
useQuery(['todos', { type: 'done' }], ...) // queryKey === ['todos', { type: 'done' }]
```

使用数组作为查询键，主要场景有：多个查询条件，或者是有嵌套条件

需要注意是：查询键是进行值的哈希处理，也就是说，对象中的 keys 顺序没有要求，但是数组中 keys 的顺序有要求；

也就是说，以下查询认为是同一个：
```js
 useQuery(['todos', { status, page }], ...)
 useQuery(['todos', { page, status }], ...)
 useQuery(['todos', { page, status, other: undefined }], ...)
```

而下面的查询则认为各不相同：

```js
 useQuery(['todos', status, page], ...)
 useQuery(['todos', page, status], ...)
 useQuery(['todos', undefined, page, status], ...)
```

对于同一查询键 （`Query Keys`）,在同一个的应用中，如果在多处都使用到了，并且同时发请求时，只会发送同一个请求，同享请求接口，及时在不同时候发送请求，如果该查询结果还是有效期内（通过 `staleTime` 设置），则直接使用有效期内的缓存数据，不再重新发送请求。

如下示例代码，由于设置了失效时间 `staleTime: 10000`，所以 `<List/>` 中请求了查询键为 `list1` 的数据，一秒之后渲染 `<List2/>` 组件时，由于也使用到了查询键为 `list1` 的请求，而且缓存数据还在有效期内，则不再发送请求，直接使用缓存结果。而且我们可以看到 `<List2/>` 组件中返回结果中的 `isPlaceholderData: false`， 说明数据是在组件挂载前就存在的。

```jsx
const Index = () => {
    const [showList2, setshowList2] = useState(false)
    useEffect(() => {
        setTimeout(()=>{
            setshowList2(true)
        },1000)
    }, [])
    return (
        <QueryClientProvider client={queryClient}>
            <List/>
            { showList2 ? <List2/> : ''}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

const List = () => {
    const queryClient = useQueryClient()

    const result = useQuery(
        'list1',
        async () => {
            console.log("get list1");
            const {data} = await axios.get('/mall/api/test');
            return data;
        },
        {
            staleTime: 10000,
        }
    );

    console.log(result);

    return (
        <div>
            react query
        </div>
    )
}

const List2 = () => {
    const queryClient = useQueryClient()

    const result = useQuery(
        'list1',
        async () => {
            console.log("get list2");
            const {data} = await axios.get('/mall/api/CRH-MALLY005'); 
            return data;
        },
        {
            staleTime: 10000,
        }
    );
    
    console.log(result);

    return (
        <div>
            react query
        </div>
    )
}

ReactDOM.render(<Index />, document.querySelector('#content'));
```


### 6、查询配置（Query Config）

cacheTime,
enabled,
initialData,
initialDataUpdatedAt
isDataEqual,
keepPreviousData,
notifyOnChangeProps,
notifyOnChangePropsExclusions,
onError,
onSettled,
onSuccess,
queryKeyHashFn,
refetchInterval,
refetchIntervalInBackground,
refetchOnMount,
refetchOnReconnect,
refetchOnWindowFocus,
retry,
retryOnMount,
retryDelay,
select,
staleTime,
structuralSharing,
suspense,
useErrorBoundary,


### 7、 `useQuery` 出参

请求状态相关：
- status （string）: 可出现的值 "idle" 、"success" 、 "loading" 、 "error"
- isIdle (boolean): status == "idle" 时为 true，一般设置了 `enable: true` 会出现
- isLoading (boolean): status == "loading"  时为 true， 为 true 时表示该 `Query` 当前没有缓存数据，且正在请求数据及 isFetching == true
- isError (boolean): status == "error" 时为 true
- isSuccess: status == "success" 时为 true

对应状态下，可以获取更多的信息：
- data: status == "success" 时，返回数据
- dataUpdatedAt (number): 数据更新时间戳
- error: 默认为 null， status == "error" 时，返回报错信息
- errorUpdatedAt (number): 错误信息更新时间戳
- isFetching (boolean): 是否为正在请求，不论是第一次请求，还是后台自动发起的重新请求

其他字段：
- failureCount (number): 错误次数，每次报错时递增，当有成功时，清零
- isFetched (boolean): 是否请求完成，
- isFetchedAfterMount (boolean): 是否是组件 `mounted` 之后才完成请求的，可以避免渲染组件挂载前的缓存数据；
- isRefetchError (boolean): 再次请求报错时返回 true；
- isLoadingError (boolean): 第一次请求报错时返回 true
- isPlaceholderData (boolean): 如果显示的数据是占位符数据，则为true。
- isPreviousData (boolean): 当设置 `keepPreviousData` 并返回上一个查询的数据时为true；
- isStale (boolean): 如果缓存中的数据无效或数据早于给定的staleTime，则为true；
- refetch (options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult> : 手动重新获取查询的功能
- remove (ƒ ()): 从缓存中删除查询的功能

### 8、并行查询 （Parallel Queries）

- 并行查询数量如果是已知，则可以直接使用多个 `useQuery` 即可：

```jsx
function App () {
    // The following queries will execute in parallel
    const usersQuery = useQuery('users', fetchUsers)
    const teamsQuery = useQuery('teams', fetchTeams)
    const projectsQuery = useQuery('projects', fetchProjects)
    ...
}
```

- 如果并行请求数量是动态的，则可以使用 `useQueries` , `useQueries` 接受一组查询对象，并且返回对应的结果数组：

```jsx
function App({ users }) {
    const userQueries = useQueries(
        users.map(user => {
            return {
                queryKey: ['user', user.id],
                queryFn: () => fetchUserById(user.id),
            }
        })
    )
}
```

### 9、串行查询/依赖查询 （Dependent Queries）

如果一个查询依赖于上一个查询结果，那么我们可以配置 `enable` 来决定何时可以启动查询：

```jsx
// Get the user
const { data: user } = useQuery(['user', email], getUserByEmail)

const userId = user?.id

// Then get the user's projects
const { isIdle, data: projects } = useQuery(
    ['projects', userId],
    getProjectsByUser,
    {
        // The query will not execute until the userId exists
        enabled: !!userId,
    }
)
```

当不存在 `userId` 时，获取 `projects` 的查询 `enabled: false`, 对应的返回结果 `status` 为 `isIdle`, 当获取到 `userId` ，`enabled: true`, 才开始进行查询。


### 10、禁用/暂停查询

一些特定，我们不希望请求自动发起，这时可以设置 `enabled: false`, 这时不管数据是否失效，都不会自动发起请求

- 如果存在缓存数据，返回状态为 `status == 'success'`;
- 如果不存在缓存数据，则返回状态为：`status === 'idle'`;
- `useQuery` 出参中的 `refetch` 函数手动触发请求。

```jsx
function Todos() {
    const {
        isIdle,
        isLoading,
        isError,
        data,
        error,
        refetch,
        isFetching,
    } = useQuery('todos', fetchTodoList, {
        enabled: false,
    })
    
    return (
        <>
            <button onClick={() => refetch()}>Fetch Todos</button>
        
            {isIdle ? (
                'Not ready...'
            ) : isLoading ? (
                <span>Loading...</span>
            ) : isError ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <ul>
                        {data.map(todo => (
                            <li key={todo.id}>{todo.title}</li>
                        ))}
                    </ul>
                    <div>{isFetching ? 'Fetching...' : null}</div>
                </>
            )}
        </>
    )
}
```

