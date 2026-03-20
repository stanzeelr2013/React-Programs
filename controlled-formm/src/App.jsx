import { useState } from 'react'
import './App.css'

function App() {
const[name,setName]=useState('');
const[password,setPassword]=useState('');
const[email,setEmail]=useState(''); 
  return (
    <div>
      <h1> Controlled form</h1>
      <form >
        <input type="text" onChange={(event)=>setName(event.target.value)} placeholder='Enter name'></input>
        <br/>
        <input type="text" onChange={(event)=>setPassword(event.target.value)} placeholder='Enter Password'></input>
        <br/>
        <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Email'></input>
        <br/>
        <button>Submit</button>
        <button onClick={()=>{setName('');setEmail('');setPassword('')}}>Clear</button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
    </div>
  )
}

export default App
