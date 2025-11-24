import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EiffelTower from "./pages/EiffelTower";
import CNTower from "./pages/CNTower";
import EmpireState from "./pages/EmpireState";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">

      <Router>

        {/* Navigation at the top */}
        <header>
          <Navbar />
        </header>

        {/* Page content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eiffel" element={<EiffelTower />} />
            <Route path="/cn" element={<CNTower />} />
            <Route path="/empire" element={<EmpireState />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </Router>

    </div>
  );
}

export default App;
