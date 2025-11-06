import './App.css';
import User from './commments'
import user from "./User_feedback"

//import images
import avatar1 from "./images/icon_batman.png"
import avatar2 from "./images/icon_ball.png"
import avatar3 from "./images/icon_wand.png"
import User_feedback from './User_feedback';

function App() {
  return (
   <>
   <h1 style={{textAlign:'center'}}>Lab12, React props by Andrew Murray</h1>
   <section className= "container">

   </section>

   <section className="container">
    <User_feedback username = "Batman" > <User image={avatar1} date= "04/23/2025" msg= "I am Batman"/> </User_feedback>

    <User_feedback username = "Pokeball"> <User image= {avatar2}  date="01/20/2025" msg="Catch'em all"/>  </User_feedback>

    <User_feedback username = "Wand">  <User image ={avatar3} date="12/13/2024" msg="3 wishes please"/> </User_feedback>


   </section>
   </>
 );
}

export default App;
