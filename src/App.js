import React, { Component } from 'react'
import Function from './Component/Function';
import Class from './Component/Class';
import './App.css';

class App extends Component{
  constructor(){
  super();
  this.state={
     functionClick:false,
     classClick:false
  }
}
  render(){
    return(
    <div className='App'>
      <h1 className='heading'>Styling using Functional and Class Component</h1>
      <button onClick={()=>this.setState({functionClick:!this.state.functionClick})}>To View Functional Component</button>
      <button onClick={()=>this.setState({classClick:!this.state.classClick})}>To View Class Component</button>


      {this.state.functionClick && <Function/>}
      {this.state.classClick && <Class/>}
    </div>
    );
  }
}

export default App;
