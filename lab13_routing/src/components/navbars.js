import React from "react";
import "../App.css"
import {Link} from "react-router-dom"

const Navbars= function (){
    
    return(
        <>
        
        <nav className= "navbar">
            <div className= 'qcclink'>
                <Link>QCC</Link>
            </div>
            <div className="btngroup">
                <button><Link to="/">Home</Link></button>
                <button><Link to="/about">About Us</Link></button>
                <button><Link to="/contact">Contact Us</Link></button>
            </div>


        </nav>
        
        </>
    )
}

export default Navbars