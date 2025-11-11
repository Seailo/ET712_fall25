import React from "react";
import './App.css'

const User_feedback=function(props){
    //openmodal window
    const openmodalwindow=() =>{
        const modalwindow = document.querySelector("modalWindow")
        modalwindow.style.display="block"
    }
    return(
        <>
        <div className="feedbackcontainer">
            <section className="feedbackcard">
                <div className="content"> {props.username} </div>
                <div className="description"> {props.children} </div>
                <div className="cardfooter">
                <p className="addicon" onClick={openmodalwindow}><span>&#410011;</span> Add feedback </p>
                </div>





            </section>
            
            </div>
        </>
    )
}

export default User_feedback