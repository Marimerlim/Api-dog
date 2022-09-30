import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home/index";
import DogPage from "../pages/dogPage/index";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog-page" element={<DogPage />} />
      </Routes>
    </Router>
  );
}
