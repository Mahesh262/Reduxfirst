import React from 'react'
import { Nav, } from 'react-bootstrap'

import { useSelector,useDispatch } from 'react-redux'

import {
    decrement,
    increment,
    reset,
    login,
    logout,

} from './Redux/Actions'
const App = () => {
   const counter = useSelector((state)=>state.Counter)
   console.warn(counter)
   const auth = useSelector((state)=>state.Auth)
   const dispatch = useDispatch();
  return (
    <>
   <Nav className="bg-success">
       <Nav.Link>Home</Nav.Link>
   </Nav>
    <h1 variant= "dark">REDUX</h1>
    <h3>{counter}</h3>
    <h4>Counter</h4>
    <button className= "btn btn-warning"onClick={()=>dispatch(increment())}>increment</button>
    <button className= "btn btn-success" onClick={()=>dispatch(reset())}>RESET</button>
    <button className= "btn btn-muted" onClick={()=>dispatch(decrement())}>increment</button>
    <h2>For loggins</h2>
    <button className= "btn btn-danger" onClick={()=>dispatch(login())}>LOGIN</button>
    <button className=' btn btn-primary' onClick={()=>dispatch(logout())}>LOGout</button>
      {auth ?(<div>
          <p>
              I dont't more than 50%.but if oy
          </p>
      </div>):('Login ifirst')}
    
    
    
    </>
  )
}

export default App