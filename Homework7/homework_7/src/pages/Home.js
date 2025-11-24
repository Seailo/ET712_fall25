import { Link } from "react-router-dom";
import eiffelImg from "../images/eiffel.jpg";
import cnImg from "../images/cn.jpg";
import empireImg from "../images/empire.jpg";


function Home() {
  return (
    <>
      <div className="page">
        <h1>Welcome to the Towers of the World</h1>
        <p>
          Explore some of the most iconic and record-breaking towers on Earth.
          Click any page in the navigation to learn something surprising about
          each landmark.
        </p>
      </div>

      <div className="tower-gallery">

        <Link to="/eiffel" className="tower-item">
          <img src={eiffelImg} alt="Eiffel Tower" />
          <p>Eiffel Tower</p>
        </Link>

        <Link to="/cn" className="tower-item">
          <img src={cnImg} alt="CN Tower" />
          <p>CN Tower</p>
        </Link>

        <Link to="/empire" className="tower-item">
          <img src={empireImg} alt="Empire State Building" />
          <p>Empire State Building</p>
        </Link>

      </div>
    </>
  );
}

export default Home;
