import Dealers from './components/Dealers/Dealers';
import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register"; // Corrected import statement
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers/>} />
    </Routes>
  );
}
export default App;


