import React from 'react';
import { forwardRef } from 'react';

const Child = (prosp,ref) => {
  return (
    <div>
        <input type="text" ref={ref}/>
        <button>update input box</button>
    </div>
  )
}

export default forwardRef( Child)