
import React, { useState } from "react";

function Counter() {
    
    const [count,setCount] = useState(9);

    const Increment = () =>{
        setCount(count + 1)
        console.log(count)
      }
      const Decrement = () =>{
        setCount(count - 1)
        console.log(count)
      }
  return (
    <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <div>{count}</div>
    </div>
  )
}

export default Counter