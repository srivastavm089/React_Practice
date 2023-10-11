import React, { useMemo , useState } from 'react'

const FunctionBased = () => {
   const[state,setState] =  useState(5);
 const[count,setCount] = useState(15)
 const useMemoOp = useMemo(function multicount(){
  console.log("run")
  return state*5;
},[state]);
//unwanted controll
  return (
   
    <div>
     
        <h1>{state}</h1>
        <h2>{count}</h2>
        <h3>{useMemoOp}</h3>
        <button onClick={()=> setState(state+1)}>state badhao</button>   
        <button onClick={()=> setCount(count+20)}>count badhao</button>
    </div>
  )
}

export default FunctionBased