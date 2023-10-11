import React from 'react';
import { createRef } from 'react';
class RefClassComp extends React.Component{
  constructor(){
    super();
    this.state={
      data:0
    }
  this.paraRef = createRef();
  
  }
  componentDidMount(){
   this.paraRef.current.style.color="blue"
  }

    
  getValue(){
    this.setState({data:this.paraRef.current.value});
    this.paraRef.current.style.color="red";
  }
  render(){
    return (
      <div>
        <h1>{this.state.data}</h1>
       <input ref={this.paraRef}></input>
       <button onClick={()=> this.getValue()}>getValue</button>

      </div>
    )
  }
}
export default RefClassComp;