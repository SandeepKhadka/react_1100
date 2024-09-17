function useState(initialValue){
    let mutatorFunc = () => {}
    return [initialValue, mutatorFunc]
}

console.log(useState(100));
let [value, setValue] = useState(200) //array dest..
console.log(value);
console.log(setValue);

