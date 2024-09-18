import React, { useState } from 'react'

const InputField = () => {
    let [inptValue, setInptValue] = useState("")

    function inputChange(e){
        console.log(e.target.value);
        setInptValue(e.target.value)
        
    }
  return (
    <>
    <h1>Input : {inptValue}</h1>
      <input type="text" onChange={inputChange}/>
    </>
  )
}

export default InputField
