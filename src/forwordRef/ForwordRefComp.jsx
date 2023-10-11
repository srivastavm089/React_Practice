import React from 'react'
import Child from './Child';
import { useRef } from 'react';
const ForwordRefComp = () => {
    const inputRef = useRef(null);
 function updateInput(){
    inputRef.current.value = "1000"
 }
  return (
    <div>
        <Child ref={inputRef} />
        <button onClick={updateInput}>update</button>
    </div>
  )
}

export default ForwordRefComp