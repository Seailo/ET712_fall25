import './App.css';
import { useState } from 'react';

// Three messages //
const message = ['I think therefore I am', 'The only thing we have to fear is fear itself', 'I have a dream'];

function App() {

  // set initial state //
  const [isOpen, setIsopen] = useState(false);
  const [counter, setCounter] = useState(1);

  return (
    <div className="App">
      <h1 className='Title'>Slice card by Andrew Murray</h1>

      <section className='slidewrapper'>

        <div className='numberwrapper'>
          <div className={counter === 1 ? 'active' : ''}><p>1</p></div>
          <div className={counter === 2 ? 'active' : ''}><p>2</p></div>
          <div className={counter === 3 ? 'active' : ''}><p>3</p></div>
        </div>

        <p className='msg'>{counter} — {message[counter - 1]}</p>

        <div className='btngroup'>
          
          {/* PREVIOUS BUTTON */}
          <button 
            onClick={function(){
              if (counter === 1) {
                setCounter(3); 
              } else {
                setCounter(counter - 1);
              }
            }}
          >
            Previous
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={function(){
              if (counter === 3) {
                setCounter(1);
              } else {
                setCounter(counter + 1);
              }
            }}
          >
            Next
          </button>

        </div>

        {/* open and close */}
        <section className='info'>
          <p>
            <b>Cat (Felis catus)</b>, commonly referred to as domestic cat or house cat  
            <button 
              className='readmorebtn' 
              onClick={function(){ setIsopen(!isOpen); }}
            >
              {isOpen ? "Hide" : "Read More"}
            </button>
          </p>
        </section>

        <section>
          {
            isOpen && (
              <div className='readmore'>
                <p>
                  The cat, commonly referred to as the domestic cat or house cat, 
                  is a small domesticated carnivorous mammal. It is the only 
                  domesticated species of the family Felidae.
                </p>
              </div>
            )
          }
        </section>

      </section>
    </div>
  );
}

export default App;
