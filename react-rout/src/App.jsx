
import './App.css'
import {createBrowserRouter,RouterProvider}
from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
const router=createBrowserRouter(
  [
    {
      path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
    },
      {
       path:"/about",
    element:
    <div>
      <Navbar/>
      <About/>
    </div>
      },
      {
      path:"/dashboard",
    element:
    <div>
      <Navbar/>
      <Dashboard/>
    </div> 
      }
  ]
)
function App() {
  
  return (
<div>
  <RouterProvider router={router}/>
</div>
  )
}

export default App
