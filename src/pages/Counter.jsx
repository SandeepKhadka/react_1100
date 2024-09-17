
const Counter = () => {

    let count = 100
    function countValue() {
        count++
        console.log({count});
        
    }
    console.log("render");
    
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={ countValue}>Increment count</button>
        </div>
    )
}

export default Counter
