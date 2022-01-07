import React from 'react';
import {connect} from 'react-redux'
import { useEffect } from 'react';
function App({counterValue,message,incrementAsync,decrement,isIncrementing}) {

 
  return (
    
    <div className="App">
      
      <h1>Counter{counterValue}</h1>
       {
        message !=="" && <p>{message}</p>
      } 
      <button 
      disabled={isIncrementing}
      onClick={()=>incrementAsync(2)}>{
        isIncrementing ?"loading" :"+" 
      }</button>
      <button onClick={()=>decrement()}>-</button>
    </div>
  );
}

const mapStateToProps=(state)=>({
  counterValue : state.counter.count,
  isIncrementing : state.counter.isIncrementing,
  message : state.toaster.message,
})
const mapActionsToProps=(dispatch)=>{
  return {
  decrement : dispatch.counter.decrement,
  incrementAsync : dispatch.counter.incrementAsync,
}
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
