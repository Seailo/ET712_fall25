import { Link } from "react-router-dom";

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
          <img src="/images/eiffel.jpg" alt="Eiffel Tower" />
          <p>Eiffel Tower</p>
        </Link>

        <Link to="/cn" className="tower-item">
          <img src="/images/cn.jpg" alt="CN Tower" />
          <p>CN Tower</p>
        </Link>

        <Link to="/empire" className="tower-item">
          <img src="/images/empire.jpg" alt="Empire State Building" />
          <p>Empire State Building</p>
        </Link>

      </div>
    </>
  );
}

export default Home;
