import { useState } from "react";

const CounterState = () => {
    let count = 100
    const [value, setValue] = useState(count)

    function incValue() {
       setValue(value + 1)
    }

    function decValue() {
        setValue(value - 1)
     }
    console.log("render");
    
    return (
        <div>
            <h3>Value = {value}</h3>
            <button onClick={ incValue}>Increment value</button>
            <button onClick={ decValue}>Decrement value</button>
        </div>
    )
}

export default CounterState
