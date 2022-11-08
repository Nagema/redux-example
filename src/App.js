import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Planets from "./pages/Planets";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Characters" element={<Characters />} />
        <Route path="Planets" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
