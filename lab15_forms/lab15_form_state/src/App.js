import './App.css';
import React, {useState} from 'react'

function App() {
  /*
  //set initial state for username
  const [username, setUsername] = useState("")  
  */
  
  // set states for multiple inputs 
  const [inputs, setInputs]= useState({})
  //function to handle changes in all inputs

  //set states for gender
  const [myGender,setMyGender]=useState({})
  const handle_changes=function(event){
    const name =event.target.name
    const value =event.target.value
    //update the states
    setInputs(values =>({...values,[name]:value}))
  } 
//function to collect gender 
const setMygender = (event)=>{
  setMygender(event.taget.value)
}

//set state for comment area
const[textcomment, setComment]=useState('')
  
//function to collect the comments
const submitted_comments= function(event){
  setComment(event.targe.value)
}

//function submit form 
  const submitform= function(event){
    event.preventDefault()
  }
//pasport function 
  return (
    <div className="App">
     <form className= "myform">
      <fieldset>
        <legend>Form in React JS</legend>
        <div className='formgroup'>
        <label for="name">Enter Username
        </label>
        <input
         type="text" 
         id="name"
         className='importstyle' 
         placeholder="Type the username..."
        value={inputs.username}
        onChange= {handle_changes}
        />
        </div>

        <div className='formgroup'>
          <label for="age">Enter your Age:</label>
          <input 
          type='number'
          id='age'
          className='importstyle'
          name="age"
          placeholder='Type in number your age...'
          value={inputs.age}
          onChange= {handle_changes}
          />
        </div>
        
        {/** Select a Gender*/ }
        <div className="formgroup">
          <label> select a gender:
        <select value={myGender} onChange={selectedGender}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>

        </select>
        </label>
        </div>

        {/**comments using text area*/}
        <div className='formgroup'>
          <label for="comments"> Any suggestions?</label>
          <textarea
          id ="comments"
          className='importstyle'
          value={textcomment}
          onChange={submitted_comments}
          placeholder='Please Type Your comments...'
          
          
          />
        </div>

        {/**Submit form*/}

        <input type ="submit" className='btnsubmit'/>
        


      </fieldset>
    
     </form>

     <p className='printresult'>Username = {inputs.username} </p>
     <p className="printresult">Age = {inputs.age}</p>
     <p className='printresult'>Gender= {myGender}</p>
     <p className="Comments">Comments</p>
    </div>
  );
}


export default App;
