import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(1000)

    let count = 100
    function countValue() {
        count++
        console.log({count});
        
    }
    function incValue() {
       setValue(value + 1)
        
    }
    console.log("render");
    
    return (
        <div>
            <h3>Count = {count}</h3>
            <h3>Value = {value}</h3>
            <button onClick={ countValue}>Increment count</button>
            <button onClick={ incValue}>Increment value</button>
        </div>
    )
}

export default Counter
