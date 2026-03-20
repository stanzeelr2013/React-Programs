import './App.css'

function App() {
let count = 0;

  function increase() {
    count = count + 1;
    console.log(count);
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
