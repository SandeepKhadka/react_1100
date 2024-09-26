import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Header2 = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            I am header 2 I am using count so donot use my count in header1 and the value is {count}
        </div>
    )
}

export default Header2
