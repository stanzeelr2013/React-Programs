import './App.css'
function App() {
  function handleclick(){
    alert("I am clicked");
  }
  function handlemouseover(){
    alert("I am on paragraph")
  }
  function handleinputchange(){
    console.log('Input changed')
  }
  return (
    <div>
      <form>
        <input type='text' onChange={handleinputchange}/>
      </form>
      <p onMouseOver={handlemouseover}>I am a para</p>
      <button onClick={handleclick}>
        Click ME
      </button>
    </div>
  )
}

export default App
