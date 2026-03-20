import { useState } from 'react'
import './App.css'
import Loginbtn from './Components/Loginbtn'
import Logoutbtn from './Components/Logoutbtn' 
function App(){
const [isLoggedin] = useState(true)
if(isLoggedin){
  return <Logoutbtn/>
}
  return<Loginbtn/>
}
export default App
