import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 function increase() {
    setCount(count + 1);
 }
  function decrease() {
    setCount(count - 1);
  }
   function reset() {
    setCount(0);
  }

  return (
    <>
       <h2>Counter Program using useState</h2>

      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
       <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
