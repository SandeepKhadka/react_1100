import React, { useEffect, useState } from 'react'

const LifeCycle = () => {

    const [state, setState] = useState(100)
    const [input, setInput] = useState("")

    useEffect(() => {
        console.log("use effect - mounted");

    }, [])

    
    useEffect(() => {
        console.log("input value - mounted");

    }, [])
    function changeInput(){

    }
    return (
        <div>
            <h1>Components Lifecycle</h1>
            <ul>
                <li>mounted</li>
                <li>did update</li>
                <li>did unmount</li>
            </ul>
            <h1>State : {state}</h1>
            <h1>input : {input}</h1>
            <button onClick={() => {
                setState(state + 1)
            }}>add</button>
            <input type="text" onChange={(e) => {
                setInput(e.target.value)
            }} />
        </div>
    )
}

export default LifeCycle
