import React from 'react'
import { useRef } from 'react'
const RefFuncComp = () => {
 const RefData = useRef(null);

const action =()=>{
    RefData.current.focus();
}
  return (
    <div>
        <input type="text" ref={RefData}/>
        <button onClick={()=> action()}>Focus</button>
    </div>
  )
}

export default RefFuncComp