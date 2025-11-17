import React from 'react'
import './App.css'

const Modalwindow = function () {

    //function to close the modal window
    const closemodalwindow = () => {
        const modalwindow = document.querySelector(".modalWindow");
        modalwindow.computedStyleMap.display = "none"; 
    };

    return (
        <>
            {/*Modal Window */}
            <section className="modalWindow">
                <div className="modalcontent">
                    
                    <header className="modalheader">
                        <p>Add Feedback</p>

                        <p 
                            className="closemodal" 
                            onClick={closemodalwindow}
                        ></p>
                    </header>

                    <main className="modalbody">
                        <input 
                            className="commentarea" 
                            type="text" 
                            placeholder="Type your comments..."
                        ></input>

                        <button className="btnpostfeedback">
                            Post Feedback
                        </button>
                    </main>

                </div>
            </section>
        </>
    );
};

export default Modalwindow;
