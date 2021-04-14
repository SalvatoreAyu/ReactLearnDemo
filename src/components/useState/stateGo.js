import React, { useState } from 'react'
export default function StateGo() {
    const [count, setCount] = useState(() => getInitialValue())
    const [count2, setCount2] = useState(0)
    // useEffect(() => {
    //     // console.log('count2 ' + count2 + ' times')
    // }, [count2])
    // useEffect(() => {
    //     // console.log('count ' + count + ' times')
    //     return () => {
    //         console.log('clean Up')
    //     }
    // }, [count])

    function getInitialValue() {
        return 7
    }
    return (
        <>
            <h1>u ClickMe {count} times</h1>
            <h2>please ClickMe too,{count2}</h2>
            <button onClick={() => setCount(count + 1)}>ClickMe</button>
            <button onClick={() => setCount2(count2 + 1)}>ClickMe too</button>
        </>
    )
}
