import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./landind_page/signup/Signup";  
import Login from "./landind_page/signup/Login";  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />  
      </Routes>
    </Router>
  );
}

export default App;

