import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Tanzeel");

  useEffect(function () {
    console.log("Effect running");
  });   // change this part

  function increase() {
    setCount(count + 1);
  }

  function changeName() {
    setName(name+"!");
  }

  return (
    <>
      <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={changeName}>Change Name</button>
    </div>
     
    </>
  )
}
export default App
