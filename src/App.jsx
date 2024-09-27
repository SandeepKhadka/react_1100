import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'
import { addToCart } from './features/cart/cartSlice'
import { login, logout, signUp } from './features/user/userSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  // const handleSingupForm = (e) => {
  //   e.preventDefault()
  //   console.log("i am here");

  //   let email = e.target.email.value
  //   let password = e.target.password.value
  //   console.log(email, password);

  //   dispatch(signUp({ email, password }))

  // }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    console.log(email, password);
    dispatch(signUp({ email, password }))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    let email = e.target.email.value
    let password = e.target.password.value
    dispatch(login({ email, password }))
    console.log(e.target.email.value);

  }


  return (
    <>
      {/* <Header /> */}
      {/* <p>{count}</p>
     <button onClick={()=> dispatch(increment())}>add</button>
     <button onClick={()=> dispatch(decrement())}>sub</button>
     <button onClick={()=> dispatch(incrementByAmount(3))}>increase by number </button>

     <button onClick={()=>dispatch(addToCart({id: count, title : "pant", price : "200"}))}>add to cart</button> */}
      <h1>Singup</h1>
      <form action="" onSubmit={handleSignupSubmit}>
        <input type="text" name='email' placeholder='email' />
        <input type="password" name='password' placeholder='password' />
        <button>Signup</button>
      </form>


      <h1>Login</h1>

      <form action="" onSubmit={handleLoginSubmit}>
        <input type="text" name='email' placeholder='email' />
        <input type="password" name='password' placeholder='password' />
        <button>Login</button>
      </form>

      <button onClick={() => dispatch(logout())}>logout</button>

    </>
  )
}

export default App
