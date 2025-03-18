import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
