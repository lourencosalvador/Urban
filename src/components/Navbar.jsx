import React from "react"
import { Link } from "react-router-dom"


const NavBar = () => {
  
    return(
     <div className="nav">
       <div className="logo">
        <Link  className="nav-link" to="/">Urban</Link>
        <div className="bola"></div>
       </div>
       <div className="nav-links">
        <div className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
        </div>
        <div className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </div>
        <div className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
        </div>
       </div>

       <div className="btns">
        <button className="btnLogin">Login</button>
        <button className="btnSign">Sign Up</button>
       </div>
     </div>
    )
}

export default NavBar