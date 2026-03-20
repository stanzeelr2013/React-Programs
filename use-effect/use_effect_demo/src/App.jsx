import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
useEffect(
  function(){
    console.log("Componenet rendered");
  }
);
/*useEffect(function () {
  console.log("Count changed!");
}, [count]);
*/
/*useEffect(function () {
  console.log("Component Mounted");
},[]);
*/
 function increase(){
    setCount(count + 1);
  }
  return (
    <>
   <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
    </>
  )
}
export default App
