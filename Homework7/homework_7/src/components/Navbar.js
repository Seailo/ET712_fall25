import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">Famous Towers</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/eiffel">Eiffel Tower</Link></li>
        <li><Link to="/cn">CN Tower</Link></li>
        <li><Link to="/empire">Empire State</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
