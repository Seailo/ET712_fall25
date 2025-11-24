import cnImg from "../images/cn.jpg";

function CNTower() {
  return (
    <div className="page">
      <h1>CN Tower</h1>
      <img src={cnImg} alt="CN Tower" />

      <p>
        Located in Toronto, the CN Tower held the record for the tallest 
        free-standing structure in the world for 32 years. Today, its 
        glass-floor lookout still scares thousands of visitors daily.
      </p>
    </div>
  );
}

export default CNTower;
