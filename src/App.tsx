import Nav from "./components/Nav";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import { BrowserRouter , Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-blue-50 pt-6">
        <Nav />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
