import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const[history,setHistory]=useState([]);

    const increment=()=>{
        setCount(prevCount=>{
            const newValue=prevCount+1;
            setHistory(prevHistory=>[...prevHistory,newValue]);
            return newValue;
        })
    }

    const decrement=()=>{
        setCount(prevCount=>{
            const newValue=prevCount-1;
            setHistory(prevHistory=>[...prevHistory,newValue]);
            return newValue;
        })
    }

  return (
    <div>
      <h2>Count :{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <h3>History:</h3>
      <ul>
        {
            history.map((value,index)=>(
                <li key={index}>{value}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Counter
