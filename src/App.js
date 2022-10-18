import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import HomePage from "./pages/HomePage";
import NotfoundPage from "./pages/NotfoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CharacterPage />} />
        <Route path="/404" element={<NotfoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
