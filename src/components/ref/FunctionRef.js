import { useEffect, useRef, useState, forwardRef } from 'react'

export default function FunctionRef() {
    const inputEl = useRef(null)
    const [count, setCount] = useState(0)
    // const ref = useRef(null)
    // useEffect(() => {
    //     ref.current = count
    // })
    // const preCount = ref.current

    const preCount = usePrevious(count)
    const onButtonClick = () => {
        inputEl.current.value = 'fuck u '
        inputEl.current.className = 'shit'
        setCount(count + 1)
        sonRef.current.focus()
    }
    const sonRef = useRef()
    return (
        <>
            <input ref={inputEl} type="text" />
            <Son ref={sonRef}></Son>
            <button onClick={onButtonClick}>Click Me</button>
            <h3>
                now:{count},before:{preCount}
            </h3>
        </>
    )
}
function usePrevious(count) {
    const ref = useRef(null)
    useEffect(() => {
        ref.current = count
    })
    return ref.current
}
const Son = forwardRef((props, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
})
