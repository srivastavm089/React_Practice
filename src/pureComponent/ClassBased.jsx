import React from "react";
class ClassBasedApp extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      data: 1,
    };
  }
  render() {
    console.log("render")
    return (
     
      <>
        App
        <h1>{this.state.data}</h1>
        <button onClick={()=> this.setState({ data: this.state.data })}>
          increase
        </button>
      </>
    );
  }
}
export default ClassBasedApp;
