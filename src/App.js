import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
