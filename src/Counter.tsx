import React, {FC, useState, useEffect} from 'react'

// 计数器例子
const Counter: FC<{initial: number}> = ({initial = 0}) => {
    const [count, setCount] = useState<number>(initial)

    // 依赖项变化时执行，依赖项为空[] 表示不再执行(仅执行一次) 同useCallback useMemo
    console.log('count: ', count)
    useEffect(
        () => {
            console.log('inner count: ', count)

            // 内部更新count 只影响内部

            // const timer = setInterval(
            //     () => {
            //         console.log('timer count: ', count)
            //         setCount(count + 1)
            //     },
            //     1000
            // )

            // return () => clearInterval(timer)
        },
        []
    )
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>加+</button>
            <div style={{marginBottom: "20px"}} />
            <button onClick={() => setCount(count - 1)}>减-</button>
        </div>
    )
}

export default Counter