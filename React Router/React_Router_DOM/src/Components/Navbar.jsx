import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h2>
        <Link to="/">Home</Link> |{"  "}
        <Link to="/About">About</Link>|{"  "}
         <Link to="/Dashboard">Dashboard</Link>{""}
      </h2>
       
    </div>
  )
}

export default Navbar