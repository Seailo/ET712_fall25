import empireImg from "../images/empire.jpg";

function EmpireState() {
  return (
    <div className="page">
      <h1>Empire State Building</h1>
      <img src={empireImg} alt="Empire State Building" />

      <p>
        Completed in 1931 during the Great Depression, the Empire State Building 
        was finished ahead of schedule and under budget. For almost a year after 
        it opened, most of its floors were empty — earning it the nickname 
        "The Empty State Building."
      </p>
    </div>
  );
}

export default EmpireState;
