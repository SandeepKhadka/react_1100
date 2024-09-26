import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'
import { addToCart } from './features/cart/cartSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Header />
     <p>{count}</p>
     <button onClick={()=> dispatch(increment())}>add</button>
     <button onClick={()=> dispatch(decrement())}>sub</button>
     <button onClick={()=> dispatch(incrementByAmount(3))}>increase by number </button>

     <button onClick={()=>dispatch(addToCart({id: count, title : "pant", price : "200"}))}>add to cart</button>
    </>
  )
}

export default App
